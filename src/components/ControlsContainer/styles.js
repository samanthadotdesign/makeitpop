import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 780px;
  margin: 0 auto;
`;

export const Panel = styled.div`
  position: absolute;
  background-color: #fff;
  height: 100vh;
  width: 660px;
  z-index: 2;
  right: 0;
  bottom: 0;
  overflow: scroll;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  @media (max-width: 800px) { 
    padding: 40px 80px 20px 20px;
    width: 100vw;
    bottom: 0;
    right: unset;
  }
`;
