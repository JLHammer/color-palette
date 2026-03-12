import { create } from "../utils/create";
import { set } from "../utils/set";

import { ColorPalette } from "../modules/ColorPalette";
import { ColorSwatch } from "../components/ColorSwatch";
import { fetchPalette } from "../data/api";
import { savePalette } from "../data/savepalette";
import { ButtonGroup } from "../modules/ButtonGroup";
import { applyGradient } from "../utils/ApplyGradient";

export const RandomPaletteSection = () => {
  const section = create(
    "section",
    "random-palette-section flex w-full flex-col items-center",
  );
  const headLine = create("h2", "hidden text-7xl tracking-widest gradient-text mt-18 mb-10 lg:block");
  headLine.textContent = "Your new colors";

  const colorPalette = ColorPalette();

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
      applyGradient(initialPalette);
      isFirstGeneration = false;
    }

    if (swatches.length === colorData.length) {
      set(buttonGroup, colorPalette);
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
