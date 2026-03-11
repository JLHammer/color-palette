import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const ButtonGroupTwo = (setActive: () => void, deletePalette: () => void) => {
  const buttonGroupTwo = create(
    "div",
    "flex justify-center items-center gap-4 justify-self-center relative w-full",
  );

  const buttonSet = Btn("Set active", setActive);
  buttonSet.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border",
    "border-white",
    "w-[40%]",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "hover:bg-white",
    "hover:text-dark-gray", "z-10"
  );
  const buttonDelete = Btn("Delete", deletePalette);
  buttonDelete.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border",
    "border-white",
    "w-[40%]",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "hover:bg-white",
    "hover:text-dark-gray", "z-10"
  );

  set([buttonSet, buttonDelete], buttonGroupTwo);
  return buttonGroupTwo;
};
