import styled from "styled-components";

export const HeaderModal = styled.header`
  span {
    display: block;
    font-size: 2em;
  }
  display: flex;
  justify-content: space-between;
`;

export const SelectionButton = styled.div`
  display:flex;
  justify-content:end;

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
  }`
