import { create } from "../utils/create";
import { set } from "../utils/set";

export const Footer = () => {
  const footer = create(
    "footer",
    "mt-auto flex flex-col items-center justify-end gap-1 bg-dark-gray px-2 pt-7 pb-5 text-center text-white",
  );

  const title = create("p", "text-xs");
  const author = create("p", "text-xs");
  const credits = create("a", "text-sm gradient-text md:text-base") as HTMLAnchorElement;

  title.textContent = "Colorizer Palette Generator";
  author.textContent = "Created by Jens Hammer & Clara Both";
  credits.textContent = "Made possible by colormind.io palette API";
  credits.href = "http://colormind.io/";

  set([title, author, credits], footer);
  return footer;
};
