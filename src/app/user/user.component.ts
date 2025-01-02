import { Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // public selectedUser =  DUMMY_USERS[randomIndex];  // public private protected
  public selectedUser =  signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   // return '././assets/users/'+this.selectedUser.avatar;  // return the path of the image
  //   return 'assets/users/'+this.selectedUser.avatar;  // return the path of the image
  // }
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);
  
  onClickingOnUser(){
    // console.log('User clicked');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser =  DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

}