import { create } from "../utils/create";
import { set } from "../utils/set";

export type Route = "random-palette" | "my-palettes";

export const NavBar = (onNavigate: (route: Route) => void) => {
  const navbar = create("nav", "flex items-center justify-center gap-4");

  const navLinks: { label: string; route: Route }[] = [
    { label: "Random Palette", route: "random-palette" },
    { label: "My Palettes", route: "my-palettes" },
  ];

  navLinks.forEach(({ label, route }) => {
    const linkEl = create(
      "a",
      "text-color-white leading-tight transform cursor-pointer border-2 gradient-border px-2 py-1 transition-transform duration-200 hover:translate-y-0.5",
    ) as HTMLAnchorElement;
    linkEl.textContent = label;
    linkEl.addEventListener("click", (e) => {
      e.preventDefault();
      onNavigate(route);
    });
    set(linkEl, navbar);
  });

  return navbar;
};
