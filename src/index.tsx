import { render } from "react-dom";
import classes from './index.module.scss'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./styles/theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)