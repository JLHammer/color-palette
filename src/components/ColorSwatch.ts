import { create } from "../utils/create";
import { set } from "../utils/set";
import { CopyBtn } from "./CopyBtn";

export const ColorSwatch = (color: string) => {
  const colorSwatch = create(
    "div",
    "color-container flex flex-col gap-[0.2rem]",
  );
  const colorBox = create("div", "color-box relative aspect-square w-full");
  colorBox.style.backgroundColor = color;

  const swatchInfo = create(
    "div",
    "swatch-info flex items-center justify-between",
  );
  const colorHex = create("span", "color-hex text-white");
  colorHex.textContent = color;

  let copyBtn = CopyBtn("Copy", () => navigator.clipboard.writeText(color));

  set([colorHex, copyBtn], swatchInfo);
  set([colorBox, swatchInfo], colorSwatch);

  const update = (hex: string) => {
    colorBox.style.backgroundColor = hex;
    colorHex.textContent = hex;
    const newCopyBtn = CopyBtn("Copy", () =>
      navigator.clipboard.writeText(hex),
    );
    copyBtn.replaceWith(newCopyBtn);
    copyBtn = newCopyBtn;
  };

  return { element: colorSwatch, update };
};
