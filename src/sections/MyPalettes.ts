import { create } from "../utils/create";
import { set } from "../utils/set";
import { buttonGroupTwo } from '../modules/ButtonGroupTwo';

import { ColorPalette } from "../modules/ColorPalette";

export const MyPalettesSection = () => {
  const section = create(
    "section",
    "my-palettes-section flex w-full flex-col items-center",

    set([swatchGroup(), buttonGroupTwo()], section);
  );
  return section;
};
