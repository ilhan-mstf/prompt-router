#!/usr/bin/env python3
"""
scripts/generate-icons.py — Generate all favicon and application icon assets

Synchronizes all static icon files with the canonical gold 'P' on dark background:
  - favicon.svg: Vector SVG icon
  - favicon-16x16.png: 16x16 PNG with rounded corners
  - favicon-32x32.png: 32x32 PNG with rounded corners
  - favicon.ico: Multi-resolution Windows ICO container (16x16, 32x32, 48x48)
  - apple-touch-icon.png: 180x180 PNG full-bleed for iOS
  - icons/icon-192.png: 192x192 PNG full-bleed PWA icon
  - icons/icon-512.png: 512x512 PNG full-bleed maskable PWA icon
"""

import os
import struct
import subprocess
import tempfile

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

SVG_FAVICON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0f0f10"/>
  <text y="24" x="4" font-size="22" font-family="serif" fill="#d4a847">P</text>
</svg>
"""

SVG_APP_ICON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0f0f10"/>
  <text y="24" x="4" font-size="22" font-family="serif" fill="#d4a847">P</text>
</svg>
"""

def render(svg_path, out_path, size):
    cmd = ["rsvg-convert", "-w", str(size), "-h", str(size), svg_path, "-o", out_path]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"rsvg-convert failed: {res.stderr}")
    print(f"  ✓ Generated {os.path.relpath(out_path, ROOT)} ({size}x{size})")

def create_ico(png_paths, out_path):
    images = []
    for path, (w, h) in png_paths:
        with open(path, "rb") as f:
            data = f.read()
            images.append((w, h, data))
    
    header = struct.pack("<HHH", 0, 1, len(images))
    offset = 6 + 16 * len(images)
    entries = []
    for w, h, data in images:
        entry = struct.pack(
            "<BBBBHHII",
            w if w < 256 else 0,
            h if h < 256 else 0,
            0,
            0,
            1,
            32,
            len(data),
            offset
        )
        entries.append(entry)
        offset += len(data)
        
    with open(out_path, "wb") as f:
        f.write(header)
        for e in entries:
            f.write(e)
        for _, _, data in images:
            f.write(data)
    sizes_str = ", ".join(f"{w}x{h}" for _, (w, h) in png_paths)
    print(f"  ✓ Generated {os.path.relpath(out_path, ROOT)} (ICO container with {sizes_str})")

def main():
    print("🎨 Generating favicon and icon assets...")
    os.makedirs(os.path.join(ROOT, "icons"), exist_ok=True)

    # 1. Save standalone favicon.svg
    fav_svg_path = os.path.join(ROOT, "favicon.svg")
    with open(fav_svg_path, "w", encoding="utf-8") as f:
        f.write(SVG_FAVICON)
    print("  ✓ Generated favicon.svg")

    with tempfile.TemporaryDirectory() as tmpdir:
        tmp_fav_svg = os.path.join(tmpdir, "fav.svg")
        tmp_app_svg = os.path.join(tmpdir, "app.svg")
        with open(tmp_fav_svg, "w", encoding="utf-8") as f:
            f.write(SVG_FAVICON)
        with open(tmp_app_svg, "w", encoding="utf-8") as f:
            f.write(SVG_APP_ICON)

        # 2. Browser tab favicons (rounded corners)
        p16 = os.path.join(ROOT, "favicon-16x16.png")
        p32 = os.path.join(ROOT, "favicon-32x32.png")
        p48 = os.path.join(tmpdir, "favicon-48x48.png")

        render(tmp_fav_svg, p16, 16)
        render(tmp_fav_svg, p32, 32)
        render(tmp_fav_svg, p48, 48)

        # 3. Apple Touch & PWA icons (full bleed for OS masking)
        p_apple = os.path.join(ROOT, "apple-touch-icon.png")
        p_192 = os.path.join(ROOT, "icons", "icon-192.png")
        p_512 = os.path.join(ROOT, "icons", "icon-512.png")

        render(tmp_app_svg, p_apple, 180)
        render(tmp_app_svg, p_192, 192)
        render(tmp_app_svg, p_512, 512)

        # 4. Multi-resolution ICO
        ico_path = os.path.join(ROOT, "favicon.ico")
        create_ico([(p16, (16, 16)), (p32, (32, 32)), (p48, (48, 48))], ico_path)

    print("🎉 All favicon and icon assets generated successfully!\n")

if __name__ == "__main__":
    main()
