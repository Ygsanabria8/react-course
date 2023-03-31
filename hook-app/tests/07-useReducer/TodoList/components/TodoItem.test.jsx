import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../../src/07-useReducer/TodoList/components/TodoItem";

describe('Test on TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should show pending todo', () => {

        // Act
        render(
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }  
                onToggleTodo={ onToggleTodoMock } 
            />
        );
        
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        // Assert
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('should show done todo', () => {

        // Arrange
        todo.done = true;

        // Act
        render(
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }  
                onToggleTodo={ onToggleTodoMock } 
            />
        );
        
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        // Assert
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('should execute onToggleTodo when click on spand', () => {

         // Act
        render(
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }  
                onToggleTodo={ onToggleTodoMock } 
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        // Assert
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
    });

    test('should execute onToggleTodo when click on button', () => {

        // Act
       render(
           <TodoItem 
               todo={ todo } 
               onDeleteTodo={ onDeleteTodoMock }  
               onToggleTodo={ onToggleTodoMock } 
           />
       );
       
       const buttonElement = screen.getByRole('button');
       fireEvent.click(buttonElement);

       // Assert
       expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
       expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
   });
});