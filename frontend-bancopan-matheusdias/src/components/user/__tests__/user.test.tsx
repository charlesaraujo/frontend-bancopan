import * as React from "react";
import { render, screen } from '@testing-library/react';
import User from "../user";
import {Provider} from "react-redux";
import {store} from "../../../app/store";

describe('test user', function () {

    const userMock = {
        name: "Matheus",
        cpf: "123.123.123-12",
        phone: "(12) 12344-1233",
        email: "teste@gmail.com"
    }

    renderWithContext(
        <User name={userMock.name}
              cpf={userMock.cpf}
              email={userMock.email}
              phone={userMock.phone}/>
    );

    it('Renders Correctly Initial', function () {

        //Name
        expect(screen.getByTestId("User-name")).toBeInTheDocument();

        //CPF
        expect(screen.getByTestId("User-cpf")).toBeInTheDocument();

        //Email
        expect(screen.getByTestId("User-email")).toBeInTheDocument();

        //Phone
        expect(screen.getByTestId("User-phone")).toBeInTheDocument();

    });

    it('Renders Correctly variables', function () {

        renderWithContext(
            <User name={userMock.name}
                  cpf={userMock.cpf}
                  email={userMock.email}
                  phone={userMock.phone}/>
        );

        //Name
        expect(screen.getByText(userMock.name)).toBeInTheDocument()

        //Email
        expect(screen.getByText(userMock.email)).toBeInTheDocument()
    });
});

function renderWithContext(element: React.ReactElement) {
    render(
        <Provider store={store}>
            {element}
        </Provider>
    )
}