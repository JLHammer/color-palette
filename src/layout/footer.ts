import { create } from "../utils/create";
import { set } from "../utils/set";

export const Footer = () => {
  const footer = create("footer", "h-24 bg-dark-gray text-center text-white");

  const title = create("p");
  const author = create("p");
  const credits = create("p");

  title.textContent = "Colorizer Palette Generator";
  author.textContent = "Created by Mike Montgomery";
  credits.textContent = "Made possible by colormind.io palette API";

  set([title, author, credits], footer);
  return footer;
};
