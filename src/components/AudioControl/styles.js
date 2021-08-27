import styled from 'styled-components';

export const Track = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  align-items: center;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: space-between;
`;
