import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text: string) {
        this.todos.push({
            id: nanoid(),
            text,
            completed: false,
        });
    }

    toggleTodo(id: string) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    deleteTodo(id: string) {
        this.todos = this.todos.filter((t) => t.id !== id);
    }
}

const todoStore = new TodoStore();
export default todoStore;
