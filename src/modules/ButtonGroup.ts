import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const ButtonGroup = (generate: () => void, save: () => void) => {
  const buttonGroup = create(
    "div",
    "mt-[10%] flex w-full flex-col items-center gap-4 justify-self-center",
  );

  const buttonOne = Btn("Generate", generate);
  buttonOne.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border",
    "border-white",
    "w-9/10",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "hover:bg-white",
    "hover:text-dark-gray",
  );
  const buttonTwo = Btn("Save this one", save);
  buttonTwo.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border",
    "border-white",
    "w-9/10",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
    "hover:bg-white",
    "hover:text-dark-gray",
  );

  set([buttonOne, buttonTwo], buttonGroup);
  return buttonGroup;
};
