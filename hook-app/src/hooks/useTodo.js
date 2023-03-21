import { useEffect, useReducer } from "react";
import { todoReducer } from "../07-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    
    const onHandleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO]  Add Todo',
            payload: newTodo,
        };

        dispatchTodo(action);
    };

    const onHandleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };
        dispatchTodo(action);
    };

    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        };
        dispatchTodo(action);
    }

    const todosCount = () => {
        return todos.length;
    };

    const todosPendingCount = () => {
        return todos.filter(todo => !todo.done).length
    };

    return {
        todos,
        onHandleNewTodo,
        onHandleDeleteTodo,
        onToggleTodo,
        todosCount,
        todosPendingCount
    };
}
