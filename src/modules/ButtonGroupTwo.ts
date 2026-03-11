import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const buttonGroupTwo = (setActive: () => void, delete: () => void) => {
  const buttonGroupTwo = create(
    "div",
    "mt-[10%] flex w-full flex-col items-center gap-4 justify-self-center",
  );

  const buttonSet = Btn("Set active", setActive);
  buttonSet.classList.add(
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
  const buttonDelete = Btn("Delete", delete);
  buttonDelete.classList.add(
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

  set([buttonSet, buttonDelete], buttonGroupTwo);
  return buttonGroupTwo;
};
