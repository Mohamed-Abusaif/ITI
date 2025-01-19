import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() recieveListFromForm = new EventEmitter<string>();

  passListItemToParentWrapper(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector(
      'input[name="todoItem"]'
    ) as HTMLInputElement;
    const todoItem = input.value;
    this.recieveListFromForm.emit(todoItem);
    form.reset();
  }
}
