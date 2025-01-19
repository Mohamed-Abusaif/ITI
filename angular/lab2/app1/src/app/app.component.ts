import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchComponent } from './search/search.component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, SearchComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lab2';
}
