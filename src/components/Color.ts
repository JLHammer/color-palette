import { create } from "../utils/create";
import { set } from "../utils/set";

import { CopyBtn } from "./CopyBtn";

export const Color = (color: string): HTMLElement => {
  const colorContainer = create("div", "color-container");
  const colorBox = create("div", "color-box");
  colorBox.style.backgroundColor = color;
  const colorHex = create("p", "color-hex");
  colorHex.textContent = color;

  const copyBtn = CopyBtn("Copy", () => {
    navigator.clipboard.writeText(color);
  });

  set([colorBox, colorHex, copyBtn], colorContainer);
  return colorContainer;
};
