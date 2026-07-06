export function getImageSrc(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (typeof image === "object" && "src" in image) return image.src;
  return String(image);
}
