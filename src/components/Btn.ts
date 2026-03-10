import { create } from "../utils/create";

export const Btn = (textContent: string, onClick: () => void) => {
  const button = create(
    "button",
    "cursor-pointer bg-black transition duration-250 ease-out",
  ) as HTMLButtonElement;
  button.textContent = textContent;
  button.addEventListener("click", onClick);
  return button;
};
