import { create } from "../utils/create";
import { set } from "../utils/set";

export const Navbar = () => {
  const navbar = create("nav", "flex gap-4 justify-center items-center");

  const navLinks = [
    { label: "Random Palette", hash: "#random-palette" },
    { label: "My Palettes", hash: "#my-palettes" },
  ];

  navLinks.forEach(({ label, hash }) => {
    const linkEl = create(
      "a",
      "text-color-white border-2 px-2 py-1 transform transition-transform duration-200 hover:translate-y-[-2px]",
    ) as HTMLAnchorElement;
    linkEl.href = hash;
    linkEl.textContent = label;
    set(linkEl, navbar);
  });

  return navbar;
};
