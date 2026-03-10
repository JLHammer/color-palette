import { Btn } from "../components/Btn";
import { create } from "../utils/create";
import { set } from "../utils/set";

export const ButtonGroup = (generate: () => void, save: () => void) => {
  const buttonGroup = create("div", "flex flex-col gap-4");

  const buttonOne = Btn("Generate", generate);
  buttonOne.classList =
    "text-white border pt-2 pb-2 pl-10 pr-10";
  const buttonTwo = Btn("Save this one", save);
  buttonTwo.classList =
    "text-white border pt-2 pb-2 pl-10 pr-10";

    set([buttonOne, buttonTwo], buttonGroup)
  return buttonGroup;
};
