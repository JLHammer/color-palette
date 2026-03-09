import './style.css'
import { get } from './utils/get'
import { set } from './utils/set'

import { header } from './layout/header'

function initApp() {
    const app = get('#app');

    if (app) { 
    app.classList = 'min-h-full';

    set ([header()], app);
    return app;
    }
}



initApp()