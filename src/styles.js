import styled, { createGlobalStyle, css } from 'styled-components';
import GrifinitoRegular from './fonts/Grifinito-Regular.woff2';
import GrifinitoMedium from './fonts/Grifinito-Medium.woff2';

export const Main = styled.div`
`;

const fonts = css`
  @font-face {
    font-family: 'Grifinito Regular';
    src: url(${GrifinitoRegular}) format('woff2');
    font-weight: 400;
  } 

  @font-face {
    font-family: 'Grifinito Medium';
    src: url(${GrifinitoMedium}) format('woff2');
    font-weight: 600;
  } 

  html {
    font-family: 'Grifinito Regular';
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  ${fonts}
`;
