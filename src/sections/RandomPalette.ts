import { create } from "../utils/create";
import { set } from "../utils/set";
import { get } from "../utils/get";

import { ColorPalette } from "../components/ColorPalette";
import { Btn } from "../components/Btn";

export const RandomPalettePage = () => {
  const section = create("section", "h-full flex flex-col items-center");
  const colorPalette = ColorPalette()
  const ButtonOne = Btn("Generate", generatePalette);
  ButtonOne.classList =
    "text-white border-blue bg-red border pt-2 pb-2 pl-10 pr-10 m-8";
  const ButtonTwo = Btn("Save this one", savePalette);
  ButtonTwo.classList =
    "text-white border-blue bg-red border pt-2 pb-2 pl-10 pr-10";
  set([ButtonOne, ButtonTwo], colorPalette)
    set([colorPalette,], section);

  return section;
};
const generatePalette = () => {};
const savePalette = () => {};
