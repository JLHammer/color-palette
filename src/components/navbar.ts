import { create } from "../utils/create";
import { set } from "../utils/set";

export function navbar() {
  let navbar: HTMLElement = create("nav", "");

  const navLinks: Array<string> = ["Random Palette", "My Palettes"];

  navLinks.forEach((link) => {
    let linkEl = create("a", "border-2 pt-2 pb-2 color") as HTMLAnchorElement;
    linkEl.href = `#${link}`;

    set(linkEl, navbar);
  });
  return navbar;
}
