import { create } from "../utils/create";
import { set } from "../utils/set";

import { MyPalettesSection } from "../sections/MyPalettes";
import { RandomPaletteSection } from "../sections/RandomPalette";

export const Main = () => {
  const main = create(
    "main",
    "flex min-h-[calc(100vh-12rem)] w-full flex-col items-center bg-dark-gray p-4",
  );

  function render() {
    main.innerHTML = "";
    const hash = window.location.hash;
    if (hash === "#my-palettes") {
      set([MyPalettesSection()], main);
    } else if (hash === "#random-palette") {
      set([RandomPaletteSection()], main);
    }
  }

  window.addEventListener("hashchange", render);
  render();
  return main;
};
