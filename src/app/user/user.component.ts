import { Component, EventEmitter, Input, Output, output} from '@angular/core';  
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id:string, 
//   name:string, 
//   avatar:string
// };

interface User {
  id:string, 
  name:string, 
  avatar:string
};


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user !: User;
  @Output() TextBoxOnClickingUserButton = new EventEmitter<string> ();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickingOnUser(){
    this.TextBoxOnClickingUserButton.emit(this.user.id);
  }

}