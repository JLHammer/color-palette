import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const ButtonGroup = (generate: () => void, save: () => void) => {
  const buttonGroup = create(
    "div",
    "mt-[10%] flex w-full flex-col items-center gap-4 justify-self-center",
  );

  const buttonGenerate = Btn("Generate", generate);
  buttonGenerate.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border-2",
    "gradient-border",
    "w-9/10",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
  );
  const buttonSave = Btn("Save this one", save);
  buttonSave.classList.add(
    "text-white",
    "bg-black",
    "py-1",
    "px-2",
    "border-2",
    "gradient-border",
    "w-9/10",
    "bg-dark-gray",
    "will-change-transform",
    "hover:scale-105",
  );

  set([buttonGenerate, buttonSave], buttonGroup);
  return buttonGroup;
};
