import { create } from "../utils/create";
import { set } from "../utils/set";
import { get } from "../utils/get";

import { ColorPalette } from "../modules/ColorPalette";
import { ColorSwatch } from "../components/ColorSwatch";
import { fetchPalette } from "../data/api";
import { savePalette } from "../data/savepalette";
import { ButtonGroup } from "../modules/ButtonGroup";

export const RandomPalettePage = () => {
  const section = create("section", "h-full grid grid-cols-2");
  const colorPalette = ColorPalette();

  const generatePalette = async () => {
    const colorData = await fetchPalette();

    colorData.forEach((colorData: number[]) => {
      const hex = rgbToHex(colorData[0], colorData[1], colorData[2]);
      const swatch = ColorSwatch(hex);
      set(swatch, colorPalette);
    });
  };

  generatePalette();
  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      "#" + [r, g, b].map((val) => val.toString(16).padStart(2, "0")).join("")
    );
  };

   const savePalette = async () => {}

  const buttonGroup = ButtonGroup(generatePalette, savePalette);


 
  set([colorPalette, buttonGroup], section);

  return section;
};
