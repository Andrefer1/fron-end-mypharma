import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
