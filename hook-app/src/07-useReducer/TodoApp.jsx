import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";

export const TodoApp = () => {

    const { 
            todos, onHandleNewTodo, 
            onHandleDeleteTodo, onToggleTodo,
            todosCount, todosPendingCount, 
        } =useTodo();

    return (
        <>
            <h1>Todo App: { todosCount() } <small>Pendientes: { todosPendingCount() }</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo= { onHandleDeleteTodo }
                        onToggleTodo={ onToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd  onNewTodo={ onHandleNewTodo } />
                </div>
            </div>
        </>
    );
}
