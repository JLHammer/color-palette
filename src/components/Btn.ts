import { create } from "../utils/create";

export const Btn = (textContent: string, onClick: () => void) => {
  const button = create("button") as HTMLButtonElement;
  button.textContent = textContent;
  button.addEventListener("click", onClick);
  return button;
};
