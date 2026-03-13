import { create } from "../utils/create";
import { set } from "../utils/set";
import { NavBar, type Route } from "../components/NavBar";

export const Header = (onNavigate: (route: Route) => void) => {
    let header = create(
        "header",
        "flex h-24 w-full items-center justify-between border-b bg-black px-4 text-center text-white md:px-14 lg:px-26",
    );

    let headerLogo = create("h1", "gradient-text");
    headerLogo.textContent = "Colorizer Palette Generator";
    set([headerLogo, NavBar(onNavigate)], header);
    return header;
};
