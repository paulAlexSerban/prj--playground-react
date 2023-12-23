import { useState, useEffect } from 'react';
import { TodoItemProps } from '../components/TodoItem';

function useTodos() {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        // Refactored to use fetch() instead of axios.get() to call an API
        async function getTodosWithFetch() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data);
        }
        getTodosWithFetch();
    }, []);

    return todos;
}

export { useTodos };

// another implementation detail change
// import localTodos from "./todos.json";
// function useTodos(){
//     const data = localTodos.todos;
//     return todos;
// };
// export default {useTodos};
