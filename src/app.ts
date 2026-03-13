import { get } from "./utils/get";
import { set } from "./utils/set";

import { Header } from "./layout/header";
import { Main } from "./layout/main";
import { Footer } from "./layout/footer";

export const initApp = () => {
  const app = get("#app");

  if (app) {
    app.classList = "flex min-h-screen flex-col bg-dark-gray";

    const { el: mainEl, render } = Main();

    render("my-palettes");

    set([Header((route) => render(route)), mainEl, Footer()], app);
    return app;
  }
};
