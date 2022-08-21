import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
        to top, transparent, #1ec2f5 100%
        ),
        #ec008b repeating-linear-gradient(
          45deg, transparent, transparent 35px,
          rgba(255, 255, 255, 0.5) 35px,
          rgba(255, 255, 255, 0.5) 70px
        );
    min-height: 100vh;
  }

`;
