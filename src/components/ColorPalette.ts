import { create } from "../utils/create";
import { set } from "../utils/set";

import { Color } from "../components/Color";

export const ColorPalette = (colors: string[]) => {
  const paletteContainer = create("div", "palette-container");
  const colorElements = colors.map((color) => Color(color));
  set(colorElements, paletteContainer);
  return paletteContainer;
};
