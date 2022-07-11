import { Link } from 'react-router-dom';

import Bancologo from '../../assets/images/banco_pan.svg';
import { Cart, Container } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <h1>Banco Pan</h1>

      <Cart to="/">
        <Link to="/">
          <img src={Bancologo} alt="Banco Pan" />
        </Link>
      </Cart>
    </Container>
  );
};

export default Header;
