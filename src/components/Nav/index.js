import React from 'react';
import { Container, NavLink } from './styles';

export default function Nav() {
  return (
    <Container>
      <NavLink href="/">make it pop</NavLink>
      <NavLink href="/about">about</NavLink>
    </Container>
  );
}
