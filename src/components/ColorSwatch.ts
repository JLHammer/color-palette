import { create } from "../utils/create";
import { set } from "../utils/set";
import { CopyBtn } from "./CopyBtn";

export const ColorSwatch = (color: string): HTMLElement => {
  const colorContainer = create(
    "div",
    "flex flex-col gap-[0.2rem] color-container",
  );
  const colorBox = create("div", "relative color-box w-full aspect-square");
  colorBox.style.backgroundColor = color;

  const swatchInfo = create(
    "div",
    "swatch-info flex justify-between items-center",
  );

  const colorHex = create("span", "color-hex text-white");
  colorHex.textContent = color;

  const copyBtn = CopyBtn("Copy", () => {
    navigator.clipboard.writeText(color);
    const msg = create("span", "absolute text-white text-sm clipboard-msg");
    msg.textContent = "Copied!";
    colorBox.appendChild(msg);
    setTimeout(() => msg.remove(), 1500);
  });

  set([colorHex, copyBtn], swatchInfo);
  set([colorBox, swatchInfo], colorContainer);
  return colorContainer;
};
