import { create } from "../utils/create";

export const ColorPalette = () => {
  const swatchGroup = create(
    "div",
    "swatch-group grid w-full grid-cols-2 gap-x-3 gap-y-4 md:gap-x-6 md:gap-y-8 lg:px-12",
  );

  return swatchGroup;
};
4;
