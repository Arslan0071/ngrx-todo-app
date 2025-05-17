import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.reducer'; 

export const selectTodoState = createFeatureSelector<State>('todos');

export const selectAllTodos = createSelector(
    selectTodoState,
    (state: State) => state.todos    
);

export const selectCompletedTodos = createSelector(
    selectAllTodos,
    (todos) => todos.filter(todo => todo.completed)
);

export const selectIncompleteTodos = createSelector(
    selectAllTodos,
    (todos) => todos.filter(todo => !todo.completed)
);

