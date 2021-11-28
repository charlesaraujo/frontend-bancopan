import styled from 'styled-components';
import media from "styled-media-query";

export const ListWrapper = styled.section`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`;

export const Card = styled.div`
    padding: 1rem;
    margin: .5rem;
    border-radius: 5px;
    border-left: 5px solid var(--main-color);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
    display: flex;
    justify-content: space-between;
`;

export const CardContent = styled.div`
  
`;
export const CardTitle = styled.h1`
    font-size: var(--heading2-size);
    font-weight: 500;
    margin-bottom: .5rem;
  
`;
export const CardText = styled.p`
font-size: var(--paragraph-size);
    padding: 3px 0;
    strong{
        font-weight: 500;
    }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 5px 0;
`;