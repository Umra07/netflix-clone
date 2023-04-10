import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #fff;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  body, html {
    font-size: .85vw
  }
  
`;

export default GlobalStyle;
