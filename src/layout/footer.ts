import { create } from "../utils/create";
import { set } from "../utils/set";

export const Footer = () => {
  const footer = create(
    "footer",
    "mt-auto flex flex-col items-center justify-end gap-1 bg-dark-gray px-2 py-1 text-center text-white",
  );

  const title = create("p", "text-xs");
  const author = create("p", "text-xs");
  const credits = create("p", "text-sm");

  title.textContent = "Colorizer Palette Generator";
  author.textContent = "Created by Mike Montgomery";
  credits.textContent = "Made possible by colormind.io palette API";

  set([title, author, credits], footer);
  return footer;
};
