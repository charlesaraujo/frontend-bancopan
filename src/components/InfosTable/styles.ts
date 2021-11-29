import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.5rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--blue);
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      min-width: 12.5rem;
      text-transform: uppercase;

    }
    
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-title);

      &.icon-td {
        width: 50px;
        min-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          display: flex;
        }
      }
      
      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.6);
        }
      }
    }
  }
`;