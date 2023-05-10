import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixture";

describe('Test on AuthSlice', () => {

    test('should return initial state and called auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    });

    test('should make login', () => {

        const action = login(demoUser);
        const state = authSlice.reducer( initialState, action );

        expect(state).toEqual(authenticatedState);
    });

    test('should make logout without argument', () => {

        const action = logout();
        const state = authSlice.reducer( authenticatedState, action );

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
    });

    test('should make logout with argument', () => {

        const action = logout('Error en logout');
        const state = authSlice.reducer( authenticatedState, action );

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: 'Error en logout',
        });
        expect(state.errorMessage).toBe('Error en logout');
    });

    test('should make checkingCredentials', () => {

        const action = checkingCredentials();
        const state = authSlice.reducer( authenticatedState, action );

        expect(state.status).toBe('checking');
    });

});