import { create } from "../utils/create";
import { set } from "../utils/set";

export function Color(color: string): HTMLElement {
  const colorContainer = create("div", "color-container");
  const colorBox = create("div", "color-box");
  colorBox.style.backgroundColor = color;
  const colorHex = create("p", "color-hex");
  colorHex.textContent = color;

  set([colorBox, colorHex], colorContainer);
  return colorContainer;
}
