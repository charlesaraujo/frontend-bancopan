import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  padding: 20px 10px;
  margin: 10px;
  background-color:#fff;
  border-radius: 8px;
  min-width:300px;

  header {
    color:#02aefd;
    display: block;
    font-size: 2em;
  }

  div {
    diplay:flex;
    width:100%;
  }

  .actions {
    display:flex;
    justify-content:end;

  }

  button, a {
    background-color:#02aefd;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin: 5px 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    justify-content:center;
    padding 10px 15px;
    align-items: center;
    transition: background 0.2s;

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`