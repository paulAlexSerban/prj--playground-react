import { useState, useEffect } from 'react';
import axios from 'axios';
import { TodoItemProps } from '../components/TodoItem';

function useTodos() {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const firstTen = data.slice(0, 10);
            setTodos(firstTen);
        }
        getTodos();
    }, []);

    return todos;
}

export { useTodos };
