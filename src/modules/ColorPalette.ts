import { create } from "../utils/create";
import { set } from "../utils/set";

export const ColorPalette = () => {
  const swatchGroup = create(
    "div",
    "w-full  gap-x-3 gap-y-2 swatch-group",
  );

  return swatchGroup;
};
