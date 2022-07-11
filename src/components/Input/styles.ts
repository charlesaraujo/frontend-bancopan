import { darken } from "polished";
import styled from "styled-components";

export const StyleInput = styled.input`
display: flex;
align-items: center;
padding:10px;
margin: 20px 0;
border-style: solid;
border-width: 0.2px;
background-color:#fff;
min-width:250px;
width:100%;
border-radius: 4px;
overflow: hidden;
transition: background 0.2s;
justify-content:center;
&:hover {
  background-color: ${darken(0.08, '#fff')};
}

`;