import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const ButtonGroupTwo = (
  setActive: () => void,
  deletePalette: () => void,
) => {
  const buttonGroupTwo = create(
    "div",
    "relative flex w-full items-center justify-center gap-4 justify-self-center md:flex-col",
  );

  const buttonSet = Btn("Set active", setActive);
  buttonSet.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border-2",
    "gradient-border",
    "w-[40%]",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "z-10",
    "md:w-9/10",
  );
  const buttonDelete = Btn("Delete", deletePalette);
  buttonDelete.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border-2",
    "gradient-border",
    "w-[40%]",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "z-10",
    "md:w-9/10",
  );

  set([buttonSet, buttonDelete], buttonGroupTwo);
  return buttonGroupTwo;
};
