import { get } from "./utils/get";
import { set } from "./utils/set";

import { Header } from "./layout/header";
import { Main } from "./layout/main";
import { Footer } from "./layout/footer";

export const initApp = () => {
  const app = get("#app");

  if (app) {
    app.classList = "min-h-full";

    set([Header(), Main(), Footer()], app);
    return app;
  }
};
