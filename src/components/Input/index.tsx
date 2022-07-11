import { InputHTMLAttributes } from 'react';
import {StyleInput}  from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string,
    label?:string,
}

const Input = ({name,label,...otherProps }:InputProps) :JSX.Element => {
    return (
        <StyleInput 
        id={name}
        name={name}
        placeholder={label}
        {...otherProps}
        />
    );
  };
  
  export default Input;