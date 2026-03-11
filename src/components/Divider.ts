import { create } from "../utils/create";

export const Divider = () => {
  const divider = create("hr", "divider border-none h-px w-full bg-white absolute top-1/2");
  return divider;
}