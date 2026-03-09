import { create } from "../utils/create";
import { set } from "../utils/set";

import { ColorPalette } from "../components/ColorPalette";

export const MyPalettesPage = () => {
  const MyPalettesContainer = create("div", "my-palettes-container");
  return MyPalettesContainer;
};
