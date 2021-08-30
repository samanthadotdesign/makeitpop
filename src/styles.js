import styled, { createGlobalStyle, css } from 'styled-components';
import GrifinitoRegular from './fonts/Grifinito-Regular.woff2';
import GrifinitoMedium from './fonts/Grifinito-Medium.woff2';
import RoobertRegular from './fonts/Roobert-Regular.woff2';

export const Main = styled.div`
  
`;

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
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

  @font-face {
    font-family: 'Roobert Regular';
    src: url(${RoobertRegular}) format('woff2');
    font-weight: 400;
  } 

  html {
    font-family: 'Roobert Regular';
    font-size: 20px;
  }

  h1 { 
    font-family: "Grifinito Medium";
    font-size: 48px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  ${fonts}
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 780px;
  margin: 0 auto;
`;
