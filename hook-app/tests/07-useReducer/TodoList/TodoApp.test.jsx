import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../../src/07-useReducer/TodoApp';
import { useTodo } from '../../../src/hooks/useTodo';

jest.mock('../../../src/hooks/useTodo');

describe('Test on TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [{id: 1, description: 'demo', done: false},{id: 2, description: 'demo x2', done: true}],
        onHandleNewTodo: jest.fn(),
        onHandleDeleteTodo: jest.fn(),
        onToggleTodo: jest.fn(),
        todosCount: 2,
        todosPendingCount: 1
    });

    test('should show the component correctly', () => {
        
        // Arrange
        render(<TodoApp/>);

        // Assert
        expect(screen.getByText('demo')).toBeTruthy();
        expect(screen.getByText('demo x2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});