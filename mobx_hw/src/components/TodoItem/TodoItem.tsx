import React from 'react';
import styles from './TodoItem.module.css';
import {Todo} from "../../stores/TodoStore.ts";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    const handleToggle = () => {
        onToggle(todo.id);
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
            <div className={styles.content}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                    className={styles.checkbox}
                />
                <span className={styles.text}>{todo.text}</span>
            </div>
            <button className={styles.deleteButton} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
