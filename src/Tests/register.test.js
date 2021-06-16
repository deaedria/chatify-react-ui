import { render, screen } from '@testing-library/react';
import configureStore from '../Redux/store'
import { BrowserRouter as Router } from "react-router-dom";
import { Register } from '../Pages'
import { Provider } from 'react-redux'

const { store } = configureStore()

describe("phone number in register form", () => {
    test('it should be required', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("phone-register")).toBeRequired();
    });
    test('it should have type tel', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("phone-register")).toHaveAttribute("type", "tel");
    });
    test('it should have focus', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("phone-register")).toHaveFocus();
    });
})
describe("email in register form", () => {
    test('it should be required', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("email-register")).toBeRequired();
    });
    test('it should have type email', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("email-register")).toHaveAttribute("type", "email");
    });
})
describe("password in register form", () => {
    test('it should be required', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("password-register")).toBeRequired();
    });
    test('it should have type password', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(screen.getByTestId("password-register")).toHaveAttribute("type", "password");
    });
})