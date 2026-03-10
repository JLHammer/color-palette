import { create } from "../utils/create";
import { set } from "../utils/set";

export const ColorPalette = () => {
  const swatchGroup = create(
    "div",
    "swatch-group grid w-full grid-cols-2 gap-x-3 gap-y-2",
  );

  return swatchGroup;
};
