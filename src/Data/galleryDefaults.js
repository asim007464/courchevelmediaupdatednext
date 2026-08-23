import selectedWork from "@/Data/selectedWorkImages.json";

const createItems = (items, category) =>
  items.map((item, index) => ({
    id: `selected-${category}-${index}`,
    key: `selected://${category}/${item.file}`,
    src: `/selected-work/${category}/${encodeURIComponent(item.file)}`,
    alt: item.alt,
    source: "selected",
    category,
    sort_order: index + 1,
  }));

export const defaultGalleryCollections = {
  ski: createItems(selectedWork.ski, "ski"),
  events: createItems(selectedWork.events, "events"),
};

export const EXCLUDED_ALT = "__excluded__";

export function isExclusionRow(row) {
  return (
    row?.alt === EXCLUDED_ALT &&
    typeof row?.image_url === "string" &&
    row.image_url.startsWith("builtin://")
  );
}
