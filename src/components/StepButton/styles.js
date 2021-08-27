import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => (props.soundOn ? 'red' : 'black')};
  border: 1px solid #000;
  border-radius: 0;
  padding: 24px;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
