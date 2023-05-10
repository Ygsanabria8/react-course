import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { startGoogleSignIn, loginUserWithCredentials } from '../../../src/store/auth/thunks';
import { notAuthenticatedState } from '../../fixtures/authFixture';

const mockStartGoogleSignIn = jest.fn();
const mockloginUserWithCredentials = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    loginUserWithCredentials: ({email, password}) => {
        return mockloginUserWithCredentials({email, password});
    },
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Tests on LoginPage', () => {

    beforeEach(() => jest.clearAllMocks());

    test('should render componente succesfully', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('should call startGoogleSignIn when click on google button', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtnReference = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtnReference);

        expect(mockStartGoogleSignIn).toHaveBeenCalled();

    });

    test('should call on submit startLoginWithCrdentials', () => {

        const email = 'Yesid@yesid.com';
        const password = '123123';

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Correo'});
        const passwordField = screen.getByLabelText('password');
        const submitFormReference = screen.getByLabelText('submit-form');

        fireEvent.change(emailField, { target: { name: 'email', value: email} });
        fireEvent.change(passwordField, { target: { name: 'password', value: password} });
        fireEvent.submit(submitFormReference);

        expect(mockloginUserWithCredentials).toHaveBeenCalledWith({
            email,
            password,
        });
    });
});