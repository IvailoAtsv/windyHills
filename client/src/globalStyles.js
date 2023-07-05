import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    
  }
  @keyframes slideInFromLeft {
    0% {s
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
