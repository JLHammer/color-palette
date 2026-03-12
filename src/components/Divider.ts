import { create } from "../utils/create";

export const Divider = () => {
  const divider = create("hr", "divider border-none h-2px w-full gradient-divider absolute top-1/2");
  return divider;
}