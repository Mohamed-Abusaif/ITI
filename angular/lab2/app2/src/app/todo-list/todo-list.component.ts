import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../types/todo-item';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() items: TodoItem[] = [];
  @Output() deleteItem = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteItem.emit(id);
  }
}
