import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
  users = DUMMY_USERS;
  // selectedUserId: string = "u1";
  selectedUserId?: string;
  
  onSelectUser(id: string) {
    // console.log('Selected user id: ' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

}
