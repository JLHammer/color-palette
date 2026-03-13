import { create } from "../utils/create";
import { set } from "../utils/set";

import { ColorPalette } from "../modules/ColorPalette";
import { ColorSwatch } from "../components/ColorSwatch";
import { fetchPalette } from "../data/api";
import { savePalette } from "../utils/savepalette";
import { ButtonGroup } from "../modules/ButtonGroup";
import { setActive } from "../utils/setActive";

export const RandomPaletteSection = () => {
  const section = create(
    "section",
    "random-palette-section flex w-full flex-col items-center p-4 md:p-10 md:px-16 lg:px-3 lg:gap-12",
  );
  const headLine = create(
    "h2",
    "gradient-text hidden text-7xl tracking-widest lg:mt-18 lg:mb-2 lg:block",
  );
  headLine.textContent = "Your new colors";

  const colorPalette = ColorPalette();
  colorPalette.classList.add("lg:grid-cols-5");

  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      "#" + [r, g, b].map((val) => val.toString(16).padStart(2, "0")).join("")
    );
  };

  const swatches: { element: HTMLElement; update: (hex: string) => void }[] =
    [];

  const currentHexes: string[] = [];
  let initialPalette: string[] = [];
  let isFirstGeneration = true;

  const generatePalette = async () => {
    const colorData = await fetchPalette();

    colorData.forEach((data: number[], i: number) => {
      const hex = rgbToHex(data[0], data[1], data[2]);
      currentHexes[i] = hex;
      if (swatches[i]) {
        swatches[i].update(hex);
      } else {
        const swatch = ColorSwatch(hex);
        swatches.push(swatch);
        set(swatch.element, colorPalette);
      }
    });

    if (isFirstGeneration) {
      initialPalette = [...currentHexes];
      setActive(initialPalette);

      if (swatches.length === colorData.length) {
        const placeButtonGroup = () => {
          if (window.innerWidth < 1024) {
            set(buttonGroup, colorPalette);
          } else {
            set(buttonGroup, section);
          }
        };

        placeButtonGroup();
        window.addEventListener("resize", placeButtonGroup);
      }

      isFirstGeneration = false;
    }
  };

  const savePaletteHandler = async () => {
    savePalette(currentHexes);
  };

  const buttonGroup = ButtonGroup(generatePalette, savePaletteHandler);

  generatePalette();
  set([headLine, colorPalette], section);

  return section;
};
