import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from '../TodoItem/TodoItem.tsx';
import TodoInput from '../TodoInput/TodoInput.tsx';
import styles from './TodoList.module.css';
import todoStore from '../../stores/TodoStore.ts';

const TodoList: React.FC = observer(() => {
    const handleAddTodo = (text: string) => {
        todoStore.addTodo(text);
    };

    const handleToggleTodo = (id: string) => {
        todoStore.toggleTodo(id);
    };

    const handleDeleteTodo = (id: string) => {
        todoStore.deleteTodo(id);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            <TodoInput onAddTodo={handleAddTodo} />
            <ul className={styles.todoList}>
                {todoStore.todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggleTodo}
                        onDelete={handleDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
});

export default TodoList;
