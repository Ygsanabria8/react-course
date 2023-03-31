import { todoReducer } from "../../src/07-useReducer/todoReducer";

describe('Test in Todo Reducer', () => {

    const initialState = [
        {id: 1, description: 'demo', done: false},
    ];

    test('should return initial state', () => {

        // Act
        const newState = todoReducer(initialState, {});

        // Assert
        expect(initialState).toBe(newState);
    });

    test('should Add a todo', () => {

        // Arrange
        const action = {
            type: '[TODO]  Add Todo',
            payload: {id: 2, description: 'demo #2', done: false}
        };

        // Act
        const newState = todoReducer(initialState, action);

        // Assert
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should Remove a todo', () => {

        // Arrange
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        // Act
        const newState = todoReducer(initialState, action);

        // Assert
        expect(newState.length).toBe(0);
    });

    test('should Toggle done a todo', () => {

        // Arrange
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        // Act
        const newState = todoReducer(initialState, action);

        // Assert
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();
    });
});