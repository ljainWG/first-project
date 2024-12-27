import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser =  DUMMY_USERS[randomIndex];  // public private protected

  get imagePath() {
    return this.selectedUser.avatar;  // return the path of the image
  }
  
}
