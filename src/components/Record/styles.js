import styled from 'styled-components';

export const RecordBtn = styled.button`
  color: #ffff52;
  border: none;
  font-family: "Grifinito Medium";
  font-size: 100px;
  color: #FFFF52;
  background: none;
  cursor: pointer;

  &:hover {
    color: #FFFF00;
  }
`;

export const RecordContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
`;
