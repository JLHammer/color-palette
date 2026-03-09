import { create } from "../utils/create";
import { set } from "../utils/set";
import { get } from "../utils.get";

export function navbar() {
  let navbar: HTMLElement = create("nav", "");
  const app = get("#app");
  const navLinks: Array<string> = ["Random Palette", "My Palettes"];

  navLinks.forEach((link) => {
    let linkEl = create(
      "a",
      "text-color-white border-2 pt-2 pb-2",
    ) as HTMLAnchorElement;
    linkEl.href = `#${link}`;

    set(linkEl, navbar);
  });
  return navbar;
}
