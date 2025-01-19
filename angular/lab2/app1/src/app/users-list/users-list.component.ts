import { Component } from '@angular/core';
import usersData from '../../../public/data.json';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users: any = usersData;
  constructor() {
    console.log(this.users);
    console.log(this.users[0]);
  }

  // receivedFromChild(id: number) {
  //   console.log('FROM PARENT', id);
  //   this.users = this.users.filter((user) => user.id !== id);
  // }
}
