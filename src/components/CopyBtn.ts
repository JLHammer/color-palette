import { create } from "../utils/create";
import { set } from "../utils/set";

export const CopyBtn = (textContent: string, onClick: () => void) => {
  const button = create("button") as HTMLButtonElement;
  button.textContent = textContent;
  button.addEventListener("click", onClick);

  const icon = create("img", "copy-icon") as HTMLImageElement;
  icon.src = "./assets/images/copy-icon.png";
  icon.alt = "Copy Icon";

  set([icon], button);
  return button;
};
