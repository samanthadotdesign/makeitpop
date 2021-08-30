import React from 'react';
import { Container, NavLink, NavIcon } from './styles';

export default function Nav({ controlsOpen, setControlsOpen }) {
  const handleNavIconClick = () => {
    setControlsOpen(!controlsOpen);
  };

  return (
    <Container>
      <NavIcon title="make it pop" onClick={handleNavIconClick} />
      <NavLink href="/">make it pop</NavLink>
    </Container>
  );
}
