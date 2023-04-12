import { authReducer, types } from "../../../src/auth";


describe('Testin on AuthReduer', () => {
    
    test('should return default state', () => {
        // Arrange
        const initialState = { logged: false };

        // Act
        const state = authReducer(initialState, {});

        //Assert
        expect(state).toEqual(initialState);

    });

    test('should call login action and set user', () => {

        // Arrange
        const initialState = { logged: false };
        const action = { type: types.login, payload: { name: 'Yesid S.', id: '123' } };

        // Act
        const state = authReducer(initialState, action);

        //Assert
        expect(state).toEqual({ logged: true,  user : action.payload });

    });

    test('should call logout action and unset user', () => {

        // Arrange
        const initialState = { logged: true, user: { name: 'Yesid S.', id: '123' }};
        const action = { type: types.logout };

        // Act
        const state = authReducer(initialState, action);

        //Assert
        expect(state).toEqual({ logged: false });

    });

});