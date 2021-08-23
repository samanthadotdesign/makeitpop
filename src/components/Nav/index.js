import React from 'react';
import { Container, NavLink } from './styles';

export default function Nav() {
  return (
    <Container>
      <a href="/">TypeDJ</a>
      <NavLink href="/about">About</NavLink>
    </Container>
  );
}
