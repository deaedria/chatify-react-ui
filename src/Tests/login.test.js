import { render, screen } from '@testing-library/react';
import configureStore from '../Redux/store'
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from '../Pages'
import { Provider } from 'react-redux'

const { store } = configureStore()

describe("email in login form", () => {
    test('it should be required', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("email-login")).toBeRequired();
    });
    test('it should have type email', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("email-login")).toHaveAttribute("type", "email");
    });
    test('it should have focus', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("email-login")).toHaveFocus();
    });
})
describe("password in login form", () => {
    test('it should be required', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("password-login")).toBeRequired();
    });
    test('it should have type password', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("password-login")).toHaveAttribute("type", "password");
    });
})