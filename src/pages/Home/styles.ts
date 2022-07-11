import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display:flex;
  justify-content: end;
  a {
    background-color:#02aefd;
    color:#F5F5F5;
    border: 0;
    padding-left:5px;
    margin-bottom:10px;
    border-radius: 4px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: background 0.2s; 

    svg {
        margin-right: 5px;  
        margin-left: 5px;  
        margin-top: 5px;  
        margin-bottom: 5px;  
         
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`
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


export const UserList  = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 20px;
list-style: none;

div {
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 4px;
  padding: 10px 0px 10px;
}

li {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  min-width: 250px;
  max-width: 350px;

  img {
    align-self: center;
    max-width: 250px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-top: 5px;
  }
  
  .header{
    align-self: center;
  }
  > span {
    font-size: 21px;
    margin: 5px 0 20px;
  }

  .edit{
    background-color:#02aefd;
    
    &:hover {
      background: ${darken(0.06, '#02aefd')};
    }
  
  }

  .cancel{
    background-color: #dc143c;

    &:hover {
      background: ${darken(0.06, '#dc143c')};
    }
  }

  button {
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin: 5px 0px;
    
    display: flex;
    align-items: center;
    transition: background 0.2s;
    justify-content:center;
    padding 10px 0px;
    align-items: center;
    transition: background 0.2s;

 

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: #F5F5F5;

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
}
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #000;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#F5F5F5')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: #F5F5F5;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
