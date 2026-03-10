import { create } from "../utils/create";

export const Btn = (textContent: string, onClick: () => void) => {
  const button = create(
    "button",
    "cursor-pointer bg-black transition-transform duration-250 ease-out will-change-transform hover:translate-y-[-5%]",
  ) as HTMLButtonElement;
  button.textContent = textContent;
  button.addEventListener("click", onClick);
  return button;
};
