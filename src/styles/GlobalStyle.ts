import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #fff;
  }
  h1, h2 {
    margin: 0;
  }

  body {
    overflow-x: hidden;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  body, html {
    font-size: .85vw
  }
  
`;

export default GlobalStyle;
