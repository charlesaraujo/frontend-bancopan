import React from 'react';
import './styles.css';

interface ButtonIconComponent {
    class? : string
    onChange : (value:string) => void
    type?: string
    placehouder?: string
    required?: boolean
    maxLength?: number
    minLength?: number
    id: string
    mask?: "cpf" | "telefone"
}

function InputComponent(props: ButtonIconComponent) {

    return (
        <div className="input-container">
            <input id={props.id}
                   className={props.class || "inputClass"}
                   required={props.required}
                   onChange={(e) => props.onChange(e.target.value)}
                   type={props.type || "text"}
                   maxLength={props.maxLength || undefined}
                   minLength={props.minLength || undefined}
                   placeholder={props.placehouder || ""}/>
        </div>
    );
}

export default InputComponent;
