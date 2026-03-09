import { create } from "../utils/create";
import { set } from "../utils/set";

import { ColorPalette } from "../components/ColorPalette";

export const RandomPalettePage = () => {
  const section = create("section", "h-full flex flex-col items-center");
  set([ColorPalette()], section);

  return section;
};
