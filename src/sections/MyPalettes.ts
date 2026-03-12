import { create } from "../utils/create";
import { set } from "../utils/set";

import { ButtonGroupTwo } from '../modules/ButtonGroupTwo';
import { ColorPalette } from "../modules/ColorPalette";
import { ColorSwatch } from "../components/ColorSwatch";
import { Divider } from "../components/Divider";
import { loadPalette } from "../utils/loadPalette";
import { deletePalette } from "../utils/deletePalette";
import { setActive } from "../utils/setActive";

export const MyPalettesSection = () => {
  const section = create(
    "section",
    "my-palettes-section flex w-full flex-col items-center gap-6",
  );

  loadPalette().forEach((hexArray: string[]) => {
    const paletteAndButtonsWrapper = create("div", "flex w-full flex-col items-center gap-3");
    const colorPalette = ColorPalette();
    colorPalette.classList = "swatch-group flex w-full gap-3"
    const buttonGroupTwo = ButtonGroupTwo(() => {
      setActive(hexArray);
    }, () => {
      deletePalette(Array.from(section.children).indexOf(paletteAndButtonsWrapper));
      paletteAndButtonsWrapper.remove();
    });
    const divider = Divider();

    hexArray.forEach((hex: string) => {
      const { element, colorHex, copyBtn } = ColorSwatch(hex);
      colorHex.classList.add("text-[0.5em]");
      copyBtn.classList.add("text-[0.5em]");
      set(element, colorPalette);
    });

    set(divider, buttonGroupTwo);
    set([colorPalette, buttonGroupTwo], paletteAndButtonsWrapper);
    set([paletteAndButtonsWrapper], section);
  });


  return section;
};