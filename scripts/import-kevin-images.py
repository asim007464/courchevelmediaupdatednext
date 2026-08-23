import json
import os
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET

SKI_DIR = r"G:\projects\kevinfolder\project\Selected work\Ski"
EVENTS_DIR = r"G:\projects\kevinfolder\project\Selected work\Events"
DEST_SKI = r"G:\projects\courchevelprojectupdated\public\selected-work\ski"
DEST_EVENTS = r"G:\projects\courchevelprojectupdated\public\selected-work\events"
OUT_JSON = r"G:\projects\courchevelprojectupdated\src\Data\selectedWorkImages.json"


def extract_docx(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    texts = []
    for p in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
        parts = [
            t.text
            for t in p.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t")
            if t.text
        ]
        if parts:
            texts.append("".join(parts))
    return "\n".join(texts)


def parse_ski(text):
    alts = {}
    for line in text.split("\n"):
        line = line.strip()
        if not line or line == "Ski photos.":
            continue
        match = re.match(r"^(.+?)(?:Alt text:|Alt Text:)\s*(.+)$", line, re.I)
        if match:
            alts[match.group(1).strip().lower()] = match.group(2).strip()
    return alts


def parse_events(text):
    alts = {}
    text = text.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")
    for match in re.finditer(
        r"\d+\.\s*(courchevel-[a-z0-9-]+)\s*[-–]?\s*Alt text:\s*(.+?)(?=\d+\.\s*courchevel-|$)",
        text,
        re.I | re.S,
    ):
        alts[match.group(1).lower()] = match.group(2).strip().rstrip(".")
    for match in re.finditer(
        r"(courchevel-[a-z0-9-]+)\s*Alt text:\s*(.+?)(?=\d+\.|$)",
        text,
        re.I | re.S,
    ):
        alts[match.group(1).lower()] = match.group(2).strip().rstrip(".")
    return alts


def fallback_alt(base):
    return f"{base.replace('-', ' ').title()} in Courchevel"


def process_folder(src, dest, alts, category):
    items = []
    os.makedirs(dest, exist_ok=True)
    for fname in sorted(os.listdir(src)):
        if not fname.lower().endswith((".jpg", ".jpeg", ".webp", ".png")):
            continue
        base = os.path.splitext(fname)[0].lower()
        alt = alts.get(base, fallback_alt(base))
        dest_name = fname.replace(" ", "-")
        shutil.copy2(os.path.join(src, fname), os.path.join(dest, dest_name))
        items.append({"file": dest_name, "alt": alt, "category": category})
    return items


def main():
    ski_alts = parse_ski(
        extract_docx(r"G:\projects\kevinfolder\project\Selected work\Ski photos.docx")
    )
    events_alts = parse_events(
        extract_docx(r"G:\projects\kevinfolder\project\Selected work\Event photos.docx")
    )

    ski_items = process_folder(SKI_DIR, DEST_SKI, ski_alts, "ski")
    events_items = process_folder(EVENTS_DIR, DEST_EVENTS, events_alts, "events")

    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump({"ski": ski_items, "events": events_items}, f, indent=2, ensure_ascii=False)

    print(f"Ski images: {len(ski_items)}")
    print(f"Events images: {len(events_items)}")
    print(f"Written to {OUT_JSON}")


if __name__ == "__main__":
    main()
