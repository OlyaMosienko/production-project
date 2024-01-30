import { render } from "react-dom";
import classes from './index.module.scss'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "./shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)