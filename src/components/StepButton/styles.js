import styled from 'styled-components';

export const Button = styled.button`
  color: #000;
  background-color ${(props) => (props.soundOn ? '#ffff52' : '#fff')};
  border: 1px solid #000;
  border-radius: 0;
  padding: 12px;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
