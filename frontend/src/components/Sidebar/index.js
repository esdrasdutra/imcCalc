import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
  return (
    <Container>
      <SidebarLink to="/">Início</SidebarLink>
      <SidebarLink to="/resultado">Resultado</SidebarLink>
    </Container>
  );
}

export default Sidebar;