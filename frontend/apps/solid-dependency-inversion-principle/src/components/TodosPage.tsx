import { useTodos } from '../hooks/useTodos';
import Todoitem from './TodoItem';

const TodosPage = () => {
    const todos = useTodos();

    const renderTodos = () => {
        return todos.map((todo, index) => {
            return <Todoitem key={index} id={todo.id} title={todo.title} />;
        });
    };

    return (
        <div>
            <h1>My Todos:</h1>
            <ul>{renderTodos()}</ul>
        </div>
    );
};

export default TodosPage;
