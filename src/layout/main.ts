import { create } from "../utils/create";
import { set } from "../utils/set";

import { MyPalettesPage } from "../pages/MyPalettes";
import { RandomPalettePage } from "../pages/RandomPalette";

export const Main = () => {
  const main = create("main");

  const hash = window.location.hash;
  if (hash === "#my-palettes") {
    set([MyPalettesPage()], main);
  } else if (hash === "#random-palette") {
    set([RandomPalettePage()], main);
  }

  return main;
};
