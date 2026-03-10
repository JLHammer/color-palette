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

  const copiedLabel = create(
    "span",
    "pointer-events-none absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 transition-opacity duration-500",
  );
  copiedLabel.textContent = "Copied!";
  set([copiedLabel], colorBox);

  const showCopied = () => {
    copiedLabel.classList.remove("opacity-0");
    copiedLabel.classList.add("opacity-100");
    setTimeout(() => {
      copiedLabel.classList.remove("opacity-100");
      copiedLabel.classList.add("opacity-0");
    }, 1500);
  };

  const swatchInfo = create(
    "div",
    "swatch-info flex items-center justify-between",
  );
  const colorHex = create("span", "color-hex tracking-wider text-white");
  colorHex.textContent = color;

  let copyBtn = CopyBtn("Copy", () => {
    navigator.clipboard.writeText(color);
    showCopied();
  });

  set([colorHex, copyBtn], swatchInfo);
  set([colorBox, swatchInfo], colorSwatch);

  const update = (hex: string) => {
    colorBox.style.backgroundColor = hex;
    colorHex.textContent = hex;
    const newCopyBtn = CopyBtn("Copy", () => {
      navigator.clipboard.writeText(hex);
      showCopied();
    });
    copyBtn.replaceWith(newCopyBtn);
    copyBtn = newCopyBtn;
  };

  return { element: colorSwatch, update };
};
