const DEFAULT_DURATION = 850;
const HEADER_OFFSET = 110;

let activeAnimation = null;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function getMaxScroll() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
}

export function getSectionScrollTop(element) {
  return element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
}

function cancelActiveAnimation() {
  if (activeAnimation === null) return;
  cancelAnimationFrame(activeAnimation.frame);
  window.removeEventListener("wheel", activeAnimation.abort);
  window.removeEventListener("touchstart", activeAnimation.abort);
  activeAnimation = null;
}

// Always animates in JS with an explicit "auto" behavior per frame, so neither the
// CSS scroll-behavior rules nor the OS reduce-motion setting can turn it into a jump.
export function smoothScrollTo(top, duration = DEFAULT_DURATION) {
  cancelActiveAnimation();

  const start = window.scrollY;
  const target = Math.min(Math.max(0, top), getMaxScroll());
  const distance = target - start;
  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();
  const animation = { frame: 0, abort: () => cancelActiveAnimation() };
  activeAnimation = animation;

  window.addEventListener("wheel", animation.abort, { passive: true, once: true });
  window.addEventListener("touchstart", animation.abort, { passive: true, once: true });

  function step(now) {
    if (activeAnimation !== animation) return;
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({
      top: start + distance * easeInOutCubic(progress),
      left: 0,
      behavior: "auto",
    });
    if (progress < 1) {
      animation.frame = requestAnimationFrame(step);
    } else {
      cancelActiveAnimation();
    }
  }

  animation.frame = requestAnimationFrame(step);
}

export function scrollToSectionId(id, duration = DEFAULT_DURATION, attempt = 0) {
  if (typeof window === "undefined" || !id) return false;

  const el = document.getElementById(id);
  if (!el) {
    if (attempt < 25) {
      window.setTimeout(() => scrollToSectionId(id, duration, attempt + 1), 100);
      return true;
    }
    return false;
  }

  smoothScrollTo(getSectionScrollTop(el), duration);
  return true;
}

export function scrollToHash(href, duration = DEFAULT_DURATION) {
  if (!href?.includes("#")) return false;
  const id = href.split("#")[1]?.split("?")[0];
  return scrollToSectionId(id, duration);
}

export function scrollToHashAfterMount(href, duration = DEFAULT_DURATION) {
  if (typeof window === "undefined" || !href?.includes("#")) return undefined;

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const timer = window.setTimeout(() => {
    scrollToHash(href, duration);
  }, 350);

  return () => window.clearTimeout(timer);
}
