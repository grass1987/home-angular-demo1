import { TodoListService } from './todo-list.service';
import { TodoItem } from './shared/todo-item';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  constructor(private todoListService: TodoListService) {
  }
  today = new Date();
  bio = {
    name: 'wellwind',
    age: 30,
    sex: 'M'
  };

}
