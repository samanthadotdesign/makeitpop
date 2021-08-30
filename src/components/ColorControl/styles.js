import styled from 'styled-components';

export const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
`;

export const Inner = styled.div`
  width: 48px;
  height: 20px;
  border-radius: 2px;
  background: ${(props) => (props.color)};
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
