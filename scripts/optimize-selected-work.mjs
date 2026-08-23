import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve("public/selected-work");
const jsonPath = path.resolve("src/Data/selectedWorkImages.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

async function convertCategory(category) {
  const dir = path.join(root, category);
  const items = data[category] || [];

  for (const item of items) {
    const current = path.join(dir, item.file);
    if (!fs.existsSync(current)) {
      console.warn("missing", current);
      continue;
    }

    const webpName = item.file.replace(/\.(jpe?g|png|webp)$/i, ".webp");
    const temp = path.join(dir, `.__tmp_${webpName}`);
    const dest = path.join(dir, webpName);

    await sharp(current)
      .rotate()
      .resize({
        width: 1400,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 78 })
      .toFile(temp);

    if (fs.existsSync(dest) && dest !== current) {
      fs.unlinkSync(dest);
    }
    fs.renameSync(temp, dest);

    if (current !== dest && fs.existsSync(current)) {
      fs.unlinkSync(current);
    }

    const after = fs.statSync(dest).size;
    console.log(`${category}/${webpName} -> ${(after / 1e6).toFixed(2)}MB`);
    item.file = webpName;
  }
}

await convertCategory("ski");
await convertCategory("events");
fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`);
console.log("done");
