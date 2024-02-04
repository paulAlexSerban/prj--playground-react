import { useState, useEffect } from 'react';
import { TodoItemProps } from '../components/TodoItem';
import { getData } from '../util/http';

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getData<TodoItemProps[]>('https://jsonplaceholder.typicode.com/todos');
            if (data) {
                setTodos(data);
            }
        };
        fetchTodos();
    }, []);

    return todos;
};

// another implementation detail change
// import localTodos from "./todos.json";
// function useTodos(){
//     const data = localTodos.todos;
//     return todos;
// };
// export default {useTodos};
