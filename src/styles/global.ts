import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #ffffff;
    --black: #000000;

    --grey-50: #F0F0F5;
    --grey-300: #cccccc;
    --grey-950: #121214e6;
    
    --blue-500: #0000FF;
    
    --red-500: #ff0000;
    
    --yellow-500: #ffff00;

    --orange-500: #ff9000;

    --pink-500: #ff1493;

    --green-400: #41c900;
    --green-600: #39b100;

    --purple-100: #b7b7cc
  }

  body {
    background: var(--white);
    color: var(--black);

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
  }
`;
