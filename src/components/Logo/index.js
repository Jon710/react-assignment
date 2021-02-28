import React from 'react';

import logo from '../../assets/sw.jpg';

import { Container } from './styles';

const Logo = () => (
  <Container>
    <img src={logo} alt="star-wars" width="120" height="120" />
  </Container>
);

export default Logo;
