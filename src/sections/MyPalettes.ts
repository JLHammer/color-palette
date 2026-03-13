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
    const paletteAndButtonsWrapper = create("div", "flex w-full flex-col items-center gap-3 palette-buttons-wrapper");
    const colorPalette = ColorPalette();
    colorPalette.classList.remove("grid-cols-2", "lg:px-12");
    colorPalette.classList.add("grid-cols-5", "md:grid-cols-6", "md:pr-0", "md:pl-24", "lg:pl-24", "lg:pr-0");
    const buttonGroupTwo = ButtonGroupTwo(() => {
      setActive(hexArray);
    }, () => {
      deletePalette(Array.from(section.children).indexOf(paletteAndButtonsWrapper));
      paletteAndButtonsWrapper.remove();
    });
    const divider = Divider();

    hexArray.forEach((hex: string) => {
      const { element, copySpan, colorHex } = ColorSwatch(hex);
      copySpan.classList.add("hidden", "md:inline");
      colorHex.classList.add("text-[0.5rem]");
      set(element, colorPalette);
    });

    const placeDivider = () => {
      if (window.innerWidth >= 768) {
        divider.classList = "divider border-none h-2px w-4/5 gradient-divider"
        colorPalette.after(divider);
      } else {
        divider.classList = "divider border-none h-2px w-full gradient-divider absolute top-1/2"
        buttonGroupTwo.appendChild(divider);
      }
    };

    const placeButtonGroupTwo = () => {
      if (window.innerWidth >= 768) {
        paletteAndButtonsWrapper.appendChild(colorPalette);
        colorPalette.appendChild(buttonGroupTwo);
      } else {
        paletteAndButtonsWrapper.appendChild(colorPalette);
        paletteAndButtonsWrapper.appendChild(buttonGroupTwo);
      }
    };

    placeButtonGroupTwo();
    placeDivider();
    window.addEventListener("resize", placeButtonGroupTwo);
    window.addEventListener("resize", placeDivider);
    set([paletteAndButtonsWrapper], section);
  });


  return section;
};