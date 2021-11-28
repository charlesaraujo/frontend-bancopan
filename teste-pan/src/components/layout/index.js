import React from 'react';
import { Wrapper } from '../layout/styled';

// import { Container } from './styles';

function Layout(props) {
  return <Wrapper>
      {props.children}
  </Wrapper>;
}

export default Layout;