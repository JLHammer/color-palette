import { create } from "../utils/create";
import { set } from "../utils/set";
import type { Route } from "../components/NavBar";
import { MyPalettesSection } from "../sections/MyPalettes";
import { RandomPaletteSection } from "../sections/RandomPalette";

export const Main = () => {
  const main = create(
    "main",
    "flex min-h-[calc(100vh-12rem)] w-full flex-col items-center bg-dark-gray p-4",
  );

  let currentRoute: Route | null = null;

  function render(route: Route) {
    if (currentRoute === route) return;
    currentRoute = route;
    main.innerHTML = "";
    if (route === "my-palettes") {
      set([MyPalettesSection()], main);
    } else if (route === "random-palette") {
      set([RandomPaletteSection()], main);
    }
  }

  return { el: main, render };
};
