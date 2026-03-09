import { create } from "../utils/create";
import { set } from "../utils/set";

export const Footer = () => {
  const footer = create("footer", "bg-dark-gray text-white text-center h-24");

  const title = create("p");
  const author = create("p");
  const credits = create("p");

  title.textContent = "Colorizer Palette Generator";
  author.textContent = "Created by Mike Montgomery";
  credits.textContent = "Made possible by colormind.io palette API";

  set([title, author, credits], footer);
  return footer;
};
