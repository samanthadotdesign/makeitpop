import React from 'react';
import { Container, NavLink, NavIcon } from './styles';

export default function Nav() {
  const handleNavIconClick = () => {
    console.log('drawer slides open');
  };

  return (
    <Container>
      <NavIcon title="make it pop" onClick={handleNavIconClick} />
      <NavLink href="/">make it pop</NavLink>
    </Container>
  );
}
