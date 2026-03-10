import "./style.css";
import { get } from "./utils/get";
import { set } from "./utils/set";

import { fetchPalette } from "./data/api.ts";
import { initApp } from "./app";

initApp();
fetchPalette();
