import React from 'react';
import './styles.css';
// @ts-ignore
import iconX from "../../assets/Images/x.svg";
// @ts-ignore
import add from "../../assets/Images/add.svg";
// @ts-ignore
import edit from "../../assets/Images/edit.svg";

interface ButtonIconComponent {
    text?: string
    class? : string
    classIcon? : string
    function: () => any
    type?: "button" | "submit" | "reset" | undefined
    BeIcon: boolean
    icon?: "sum" | "delete" | "edit"
    disabled? : boolean
}

function ButtonIcon(props: ButtonIconComponent) {

    const validateIcon = () => {
        switch (props.icon) {
            case "delete":
                return (<img src={iconX} alt={'buttonIcon'} />)
            case "sum":
                return (<img src={add} alt={'buttonIcon'} />)
            case "edit":
                return (<img src={edit} alt={'buttonIcon'} />)
            default:
                return (<img src={iconX} alt={'buttonIcon'} />)
        }
    }

    return (
        <button
            type={props.type || "button"}
            className={props.class || 'button-Icon'}
            onClick={() => props.function()}
            disabled={props.disabled || false}
        >
            {props.text}
            {!props.BeIcon || validateIcon() }
        </button>
    );
}

export default ButtonIcon;
