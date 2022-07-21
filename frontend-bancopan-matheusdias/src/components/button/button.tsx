import React from 'react';
import './styles.css';
import { GrAddCircle } from "react-icons/gr";

interface ButtonIconComponent {
    text: string
    class? : string
    classIcon? : string
    function? : () => any
    type?: "button" | "submit" | "reset" | undefined
}

function Button(props: ButtonIconComponent) {
    return (
        <div className="buttonIcon-container">
            <button type={props.type || "button"} onClick={props.function} className={props.class || "buttonIcon"} >
                {props.text + " "}
                <GrAddCircle color="white" className="icon" size="1.5em"/>
            </button>
        </div>
    );
}

export default Button;
