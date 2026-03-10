import { create } from "../utils/create";
import { set } from "../utils/set";

export const NavBar = () => {
  const navbar = create("nav", "flex items-center justify-center gap-4");

  const navLinks = [
    { label: "Random Palette", hash: "#random-palette" },
    { label: "My Palettes", hash: "#my-palettes" },
  ];

  navLinks.forEach(({ label, hash }) => {
    const linkEl = create(
      "a",
      "text-color-white transform border-2 px-2 py-1 transition-transform duration-200 hover:translate-y-0.5",
    ) as HTMLAnchorElement;
    linkEl.href = hash;
    linkEl.textContent = label;
    set(linkEl, navbar);
  });

  return navbar;
};
