import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';

export const Swatch = styled.div`
  padding: 5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px #000;
  display: inline-block;
  cursor: pointer;
  margin-left: 24px;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Inner = styled.div`
  width: 48px;
  height: 20px;
  background: ${(props) => (props.color)};
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
  align-items: center;
`;

export const ColorPicker = styled(HexColorPicker)`
  bottom: 0;
  z-index: 3;
`;

export const Relative = styled.div`
  display: relative;
`;
