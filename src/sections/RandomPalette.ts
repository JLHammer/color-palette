import { create } from "../utils/create";
import { set } from "../utils/set";
import { get } from "../utils/get";

import { ColorPalette } from "../components/ColorPalette";
import { Btn } from "../components/Btn";
import { ColorSwatch } from "../components/ColorSwatch";

export const RandomPalettePage = () => {
  const section = create("section", "h-full flex flex-col items-center");
  const colorPalette = ColorPalette()
  const ButtonOne = Btn("Generate", generatePalette);
  ButtonOne.classList =
    "text-white border-blue bg-red border pt-2 pb-2 pl-10 pr-10 m-8";
  const ButtonTwo = Btn("Save this one", savePalette);
  ButtonTwo.classList =
    "text-white border-blue bg-red border pt-2 pb-2 pl-10 pr-10";

  if (loadedData){
   loadedData.forEach((valArray: number[]) => {
    let Swatch = ColorSwatch({ r: valArray[0], g: valArray[1], b: valArray[2]})
    set(Swatch, ColorPalette)
   })
    }

    set([ButtonOne, ButtonTwo], colorPalette)
    set([colorPalette,], section);

  return section;
};
const generatePalette = () => {};
const savePalette = () => {};
