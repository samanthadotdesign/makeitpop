import styled from 'styled-components';
import { ReactComponent as NavSVG } from '../../assets/nav.svg';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 30px;

  @media (max-width: 800px) {
    padding: 16px;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-family: "Grifinito Medium";
  font-size: 100px;
  color: #FFFF52;
  margin-left: 20px;

  @media (max-width: 800px) {
    font-size: 60px;
  }
`;

export const NavIcon = styled(NavSVG)`
  width: 60px;
  cursor: pointer;

  &:hover {
    circle { 
      fill: #000;
    }
    path {
      fill: #ffff52;
    }
  }

  @media (max-width: 800px) {
    width: 48px;
  }
`;
