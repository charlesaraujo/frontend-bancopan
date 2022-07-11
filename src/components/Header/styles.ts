import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  h1 {
    text-align: right;
    margin-right: 10px;
    color: #2E2E2E;
  
    &:hover {
      color: ${darken(0.06, '#2E2E2E')};
      font-weight: bold;
    }
  }
  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  a {
    img {
      width:50px;
      height:50px;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #171717;
    }

    span {
      font-size: 12px;
      color: #2E2E2E;
    }
  }
`;
