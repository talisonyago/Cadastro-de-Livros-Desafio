import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        background-color: aqua;
        margin: 0;
        padding; 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
