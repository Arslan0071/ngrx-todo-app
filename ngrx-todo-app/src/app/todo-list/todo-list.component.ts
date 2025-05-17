import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo, State  } from '../store/todo.reducer';
import { selectAllTodos, selectIncompleteTodos, selectCompletedTodos } from '../store/todo.selectors';  
import { addTodo, removeTodo, toggleTodo } from '../store/todo.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos$: Observable<Todo[]>;
  completedTodos$: Observable<Todo[]>
  incompleteTodos$: Observable<Todo[]>
  newTodoText: string = '';


  constructor(private store: Store<State>) {
    this.todos$ = this.store.select(selectAllTodos);
    this.completedTodos$ = this.store.select(selectCompletedTodos);
    this.incompleteTodos$ = this.store.select(selectIncompleteTodos);
  }

  ngOnInit(): void {
      
  }

  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.store.dispatch(addTodo({ text: this.newTodoText }));
      this.newTodoText = '';
    }
  }

  removeTodo(id: number): void {
    this.store.dispatch(removeTodo({ id }));
  }
  
  toggleTodo(id: number): void {
    this.store.dispatch(toggleTodo({ id }));
  }
}
