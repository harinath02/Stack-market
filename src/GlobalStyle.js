import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

    }
    
    body{
        background-color: #03091F;
        font-family: 'Kaushan Script', cursive;
        font-size: 1.2rem;
        font-weight: 400;
    }`
     ;

export default GlobalStyle;