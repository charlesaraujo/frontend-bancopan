import * as React from "react";
import { render, screen } from '@testing-library/react';
import InputComponent from "../input";
import {Provider} from "react-redux";
import {store} from "../../../app/store";

describe('test user', function () {

    let testText:string = "textInput";
    let testId:string = "idInput";
    let type:string = "text";
    let required:boolean = true;
    let classTeste:string = "teste";

    function setFunction() { return true}

    renderWithContext(
        <InputComponent
            onChange={setFunction}
            id={testId}
            type={type}
            placehouder={testText}
            class={classTeste}
            required={required}/>
    );

    it('Renders Correctly Initial', function () {

        const input = screen.getByTestId(`input-container-${testId}`)

        //id
        expect(input).toBeInTheDocument()
        expect(input.id).toBe(testId)

        //class
        expect(input.className).toBe("teste")
    });
});

function renderWithContext(element: React.ReactElement) {
    render(
        <Provider store={store}>
            {element}
        </Provider>
    )
}