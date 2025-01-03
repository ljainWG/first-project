import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],   // FormsModule is imported here so that we can use ngModel in new-task.component.html
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() addnewTask = new EventEmitter<NewTask>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate="";

  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    this.addnewTask.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate});
  }
}
