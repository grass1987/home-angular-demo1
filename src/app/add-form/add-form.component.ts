import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  placeholderText = '請輸入代辦事項';
  todoText = '';
  @Output() addTodoItem = new EventEmitter();

  addTodo($event: MouseEvent) {
    this.addTodoItem.emit(this.todoText);
  }

  changeTodoText($event: KeyboardEvent) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
