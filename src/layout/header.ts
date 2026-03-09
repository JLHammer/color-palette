import { create } from "../utils/create";

export function header() {
  let header = create("header");

  let headerLogo = create("string", "text-xl text-white lg:text-4xl");
  headerLogo.textContent = "Colorizer Pallete Genereator";
}
