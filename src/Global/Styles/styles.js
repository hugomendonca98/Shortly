import { createGlobalStyle } from 'styled-components';


export const GlobalStyleds = createGlobalStyle`

    /* Font Poppins 500 and 700 */
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff;
    }

    button {
        border: none;
        text-decoration: none;
        cursor: pointer;
    }
`