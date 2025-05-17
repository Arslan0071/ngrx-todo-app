import { createReducer, on } from '@ngrx/store';
import { addTodo, loadTodosSuccess, removeTodo, toggleTodo,  } from './todo.actions';



export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export interface State {
    todos: Todo[];
}

export const initialState: State = {
    todos: []
};

let nextId = 0;

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { text }) => ({
        ...state,
        todos: [...state.todos, { id: nextId++, text, completed: false }]
    })), 
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    on(toggleTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos
    }))
);