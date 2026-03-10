import { create } from "../utils/create";
import { set } from "../utils/set";

import { fetchPalette, rgbToHex } from "../data/api";
import { ColorSwatch } from "./ColorSwatch";
import { Btn } from "./Btn";

export const ColorPalette = () => {
  const swatchGroup = create(
    "div",
    "w-full grid grid-cols-2 gap-x-3 gap-y-2 swatch-group",
  );

  return swatchGroup;
};
