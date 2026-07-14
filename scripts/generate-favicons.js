const sharp = require("sharp");
const pngToIco = require("png-to-ico").default;
const fs = require("fs");

const logoSrc = "public/images/newlogo/Courchevel Media - New IsoLogo.webp";
const fallbackSrc = "public/images/websitelogos/favicon-32x32.webp";
const input = fs.existsSync(logoSrc) ? logoSrc : fallbackSrc;

async function writePng(size, outPath) {
  await sharp(input)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png()
    .toFile(outPath);
  console.log("wrote", outPath);
}

(async () => {
  await writePng(48, "public/brand-icon-48.png");
  await writePng(96, "public/brand-icon-96.png");
  await writePng(192, "public/brand-icon-192.png");
  await writePng(32, "public/favicon-32x32.png");
  await writePng(48, "public/favicon-48x48.png");
  await writePng(180, "src/app/apple-icon.png");
  await writePng(32, "src/app/icon.png");

  const icoBuf = await pngToIco([
    "public/brand-icon-48.png",
    "public/brand-icon-96.png",
  ]);
  fs.writeFileSync("public/favicon.ico", icoBuf);
  console.log("wrote public/favicon.ico", icoBuf.length, "bytes");
  console.log("source:", input);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
