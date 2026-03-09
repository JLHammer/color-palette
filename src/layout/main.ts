import { create } from "../utils/create";
import { set } from "../utils/set";

import { MyPalettesPage } from "../sections/MyPalettes";
import { RandomPalettePage } from "../sections/RandomPalette";

export const Main = () => {
  const main = create(
    "main",
    "flex flex-col items-center bg-dark-gray w-full min-h-[calc(100vh-12rem)] p-4",
  );

  function render() {
    main.innerHTML = "";
    const hash = window.location.hash;
    if (hash === "#my-palettes") {
      set([MyPalettesPage()], main);
    } else if (hash === "#random-palette") {
      set([RandomPalettePage()], main);
    }
  }

  window.addEventListener("hashchange", render);
  render();
  return main;
};
