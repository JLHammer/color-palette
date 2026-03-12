import { create } from "../utils/create";
import { set } from "../utils/set";
import { NavBar } from "../components/NavBar";
import type { Route } from "../components/NavBar";

export const Header = (onNavigate: (route: Route) => void) => {
  let header = create(
    "header",
    "flex h-24 w-full items-center justify-around border-b bg-black px-4 text-center text-white",
  );

  let headerLogo = create("h1", "gradient-text");
  headerLogo.textContent = "Colorizer Palette Generator";
  set([headerLogo, NavBar(onNavigate)], header);
  return header;
};