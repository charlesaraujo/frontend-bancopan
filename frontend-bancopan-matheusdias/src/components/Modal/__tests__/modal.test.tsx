import * as React from "react";
import { render, screen } from '@testing-library/react';
import {Modal} from "../Modal";
import {Provider} from "react-redux";
import {store} from "../../../app/store";

describe('test user', function () {

    let isModalOpen = true;
    let testText = "testModal";

    function setModalOpen() {
        isModalOpen =  !isModalOpen
    }

    renderWithContext(
        <Modal title={testText}
               isOpen={isModalOpen}
               onClose={setModalOpen}/>
    );

    it('Renders Correctly Initial', function () {

        //title
        expect(screen.getByTestId(testText)).toBeInTheDocument()

        //input
        expect(screen.getByTestId("modal-input")).toBeInTheDocument()
    });
});

function renderWithContext(element: React.ReactElement) {
    render(
        <Provider store={store}>
            {element}
        </Provider>
    )
}