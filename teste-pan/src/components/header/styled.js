import styled from "styled-components";
import {PlusOutline} from '@styled-icons/evaicons-outline/';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    font-size: var(--heading1-size);
    
`
export const Button = styled.button`
    margin:  1rem 0;
    padding: 1rem 2rem;
    background-color: var(--main-color);
    font-size: 1.3rem;
    border-radius: 50px;
    border: none;
    color: #fff;
    display: flex;
`

export const PlusIcon = styled(PlusOutline)`
    margin-right: .5rem;
    height: 1.5rem;
`