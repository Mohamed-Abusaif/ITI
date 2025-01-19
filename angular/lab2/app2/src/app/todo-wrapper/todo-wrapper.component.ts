import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoItem } from '../types/todo-item';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css'],
  imports: [TodoFormComponent, TodoListComponent],
})
export class TodoWrapperComponent {
  todoItems: TodoItem[] = [];
  nextId: number = 1;

  addTodoItem(todoText: string) {
    const newItem: TodoItem = { id: this.nextId++, text: todoText };
    this.todoItems.push(newItem);
  }

  deleteTodoItem(id: number) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }
}
