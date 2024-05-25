import React, { useState } from 'react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
    onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputText.trim()) {
            onAddTodo(inputText.trim());
            setInputText('');
        }
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Add a new todo"
                className={styles.input}
            />
            <button className={styles.addButton} onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
};

export default TodoInput;
