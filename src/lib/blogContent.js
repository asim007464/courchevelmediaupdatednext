/**
 * Lightweight markdown-ish renderer for blog bodies.
 * Supports headings, paragraphs, lists, quotes, images, links, bold/italic,
 * and passes through safe HTML image tags if pasted.
 */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInline(text) {
  let html = escapeHtml(text);
  html = html.replace(
    /!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g,
    '<img src="$2" alt="$1" class="blog-article__content-image" />'
  );
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  return html;
}

export function renderBlogContentToHtml(content) {
  const raw = String(content || "").trim();
  if (!raw) return "";

  // Allow full HTML posts if the author pasted HTML.
  if (/^\s*</.test(raw) && /<\/[a-z]+>/i.test(raw)) {
    return raw;
  }

  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").trim();
    if (text) blocks.push(`<p>${formatInline(text)}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || !listItems.length) {
      listType = null;
      listItems = [];
      return;
    }
    const tag = listType;
    blocks.push(
      `<${tag}>${listItems
        .map((item) => `<li>${formatInline(item)}</li>`)
        .join("")}</${tag}>`
    );
    listType = null;
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${formatInline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushParagraph();
      flushList();
      blocks.push(
        `<blockquote>${formatInline(trimmed.replace(/^>\s?/, ""))}</blockquote>`
      );
      continue;
    }

    if (/^!\[.*\]\(https?:\/\/.+\)$/.test(trimmed)) {
      flushParagraph();
      flushList();
      blocks.push(`<p>${formatInline(trimmed)}</p>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      listItems.push(unordered[1]);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      listItems.push(ordered[1]);
      continue;
    }

    if (listType) flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks.join("\n");
}
