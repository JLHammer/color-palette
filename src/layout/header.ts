import { create } from "../utils/create";
import { set } from "../utils/set";

import { Navbar } from "../components/navbar";

export const Header = () => {
  let header = create(
    "header",
    "flex items-center justify-around text-center bg-black text-white h-24 w-full border-b px-2",
  );

  let headerLogo = create("h1", "text-xl text-white lg:text-4xl");
  headerLogo.textContent = "Colorizer Palette Generator";
  set([headerLogo, Navbar()], header);
  return header;
};
