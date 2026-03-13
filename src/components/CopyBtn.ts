import { create } from "../utils/create";
import { set } from "../utils/set";
import { Btn } from "./Btn";

import copyIconSrc from "../assets/images/copy-icon.png";

export const CopyBtn = (textContent: string, onClick: () => void) => {
  const copyBtn = Btn(textContent, onClick);
  copyBtn.classList.add(
    "flex",
    "items-center",
    "gap-[0.15rem]",
    "copy-btn-group",
    "cursor-pointer",
  );

  const span = create("span", "text-white");
  span.textContent = textContent;

  const icon = create("img", "copy-icon h-4 w-auto md:h-6 lg:h-7") as HTMLImageElement;
  icon.src = copyIconSrc;
  icon.alt = "Copy Icon";

  copyBtn.textContent = "";
  set([span, icon], copyBtn);
  return { copyBtn, span };
};
