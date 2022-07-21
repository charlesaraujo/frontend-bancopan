import {Provider} from "react-redux";
import {store} from "../app/store";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "../pages/main/main";


export function RouterCenter() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </Provider>
    )
}