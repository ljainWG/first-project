import { Component, EventEmitter, Input, Output, output} from '@angular/core';  
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() userId !: string;
  @Input( {required : true} ) avatar!: string;
  @Input( {required : true} ) name!: string;
  // @Output() TextBoxOnClickingUserButton = new EventEmitter();
  TextBoxOnClickingUserButton = output<string> ();   // this output() creates EventEmitter object automatically, we donot have to make it explicitly as we did in Output decorator
  // output function works exctaly same as Output decorator, it is used to create an event emitter object

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onClickingOnUser(){
    this.TextBoxOnClickingUserButton.emit(this.userId);
  }

}