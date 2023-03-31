export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                onClick={ () => onToggleTodo(todo.id) }
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                aria-label="span"
            >
                { todo.description }
            </span>
            <button 
                className="btn btn-danger"
                onClick={ () => onDeleteTodo(todo.id) }
            >Borrar</button>
        </li>
    );
}
