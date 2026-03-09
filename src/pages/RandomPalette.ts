import { create } from "../utils/create";
import { set } from "../utils/set";

import { ColorPalette } from "../components/ColorPalette";

export const RandomPalettePage = () => {
  const RandomPaletteContainer = create("div", "random-palette-container");

  return RandomPaletteContainer;
};
