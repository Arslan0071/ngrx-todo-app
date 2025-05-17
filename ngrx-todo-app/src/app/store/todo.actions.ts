import { createAction, props } from '@ngrx/store';

export const addTodo  = createAction(
    '[Todo List] Add Todo',
    props<{ text: string }>()
);

export const removeTodo = createAction(
    '[Todo List] Remove Todo',
    props<{ id: number }>()
);

export const toggleTodo = createAction(
    '[Todo List] Toggle Todo',
    props<{ id: number }>()
);

export const loadTodos = createAction(
    '[Todo API] Load Todos',
);

export const loadTodosSuccess = createAction(
    '[Todo API] Load Todos Success',
    props<{ todos: { id: number, text: string, completed: boolean }[] }>()
);

export const loadTodosFailure = createAction(
    '[Todo API] Load Todos Failure',
    props<{ error: string }>()
);