import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() userData : any;

  
  // searchUser(id: number) {
  //   console.log(id)
  //   this.sendToParent.emit(id)
  // }
}
