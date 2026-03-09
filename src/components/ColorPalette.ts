import { create } from "../utils/create";
import { set } from "../utils/set";

import { fetchPalette, rgbToHex } from "../data/api";
import { ColorSwatch } from "./ColorSwatch";

export const ColorPalette = () => {
  const swatchGroup = create(
    "div",
    "w-full grid grid-cols-2 gap-x-3 gap-y-2 swatch-group",
  );
  const generateBtn = create("button", "generate-btn") as HTMLButtonElement;
  generateBtn.textContent = "Generate";

  async function generate() {
    generateBtn.textContent = "Generating…";
    generateBtn.disabled = true;
    try {
      const palette = await fetchPalette();
      swatchGroup.innerHTML = "";
      const colorElements = palette.map((rgb) => ColorSwatch(rgbToHex(rgb)));
      set(colorElements, swatchGroup);
    } finally {
      generateBtn.textContent = "Generate";
      generateBtn.disabled = false;
    }
  }

  generateBtn.addEventListener("click", generate);
  generate();
  set(generateBtn, swatchGroup);
  return swatchGroup;
};
