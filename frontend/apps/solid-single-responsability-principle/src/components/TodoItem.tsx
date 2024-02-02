import { type FC } from 'react';

export type TodoItemProps = {
    id: number;
    title: string;
};

const TodoItem: FC<TodoItemProps> = ({ id, title }) => {
    return <li>{`ID: ${id}, Title: ${title}`}</li>;
};

export default TodoItem;
