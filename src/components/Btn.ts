import { create } from "../utils/create";
import { set } from "../utils/set";

export const Btn = (textContent: string, onClick: () => void) => {
  const button = create("button") as HTMLButtonElement;
  button.textContent = textContent;
  button.addEventListener("click", onClick);
  return button;
};
