import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.pageBackground};
  }
`;

export default GlobalStyle;
