import { create } from "../utils/create";

export const Divider = () => {
  const divider = create("hr", "divider border-none h-px w-full bg-white my-5");
  return divider;
}