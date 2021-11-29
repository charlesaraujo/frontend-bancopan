import styled from 'styled-components';
import media from "styled-media-query";
import { scaleUp } from '../../theme/animations';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.form`
    position:fixed;
    background: white;
    width: 50%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    ${media.lessThan("medium")`
        width: 98%;
    `}
`;

export const ModalHeader = styled.header`
   padding: 1rem 2rem;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid grey;
`;
export const ModalTitle = styled.h1`
    font-size: var(--heading2-size);
    font-weight: 500;
`;
export const ModalClose = styled.button`
    background-color: var(--secondary-color);
    border: none;
`;
export const ModalInputWrapper = styled.div`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const ModalInput = styled.input`
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: .5s ease-in-out;
    box-sizing: border-box;
    padding: .5rem 0;
    &:focus {
        border-bottom: 2px solid var(--main-color);  
    }
    &::placeholder {
        line-height: 3;
        font-size: 1.2rem;
    }
`;
export const InputLabel = styled.label`
   color: var(--main-color);
   font-size: .8em;
   margin: 2rem 0 .5rem 0;
   font-weight: 600;
`;

export const InputError = styled.label`
   color: #fff;
   text-align: center;
   padding: 1rem;
   margin-top: 1rem;
   border-radius: 5px;
   font-size: .8em;
   background-color: var(--secondary-color);
   font-weight: 600;
   animation: ${scaleUp} .3s ease-in-out;
`;
export const ModalFooter = styled.footer`
   padding: 1.5rem;
   display: flex;
   justify-content: center;
   border-top: 1px solid grey;
`;
export const ModalButton = styled.button`
    margin:  1rem 0;
    padding: 1rem 2rem;
    background-color: var(--main-color);
    font-size: 1.3rem;
    border-radius: 50px;
    border: none;
    color: #fff;
`;