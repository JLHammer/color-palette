import { navbar } from "../components/navbar";
import { create } from "../utils/create";
import { set } from "../utils/set";

export function header() {
  let header = create("header", "bg-color-black h-24 w-full");

  let headerLogo = create("p", "text-xl text-white lg:text-4xl");
  headerLogo.textContent = "Colorizer Pallete Genereator";
  set([headerLogo, navbar()], header);
  return header;
}
