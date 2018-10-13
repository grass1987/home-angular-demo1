import { TodoItem } from './shared/todo-item';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // 我們要使用的Http
//import 'rxjs/add/operator/toPromise'; // 幫助我們將RxJs轉為Promise
//import { Observable } from 'rxjs/internal/observable';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor(private http: Http) { }

  todoItems: TodoItem[];


  loadTodoList(){
    this.http
      .get('/assets/todo-list.json')
      .toPromise()
      .then(response=>{
        this.todoItems=response.json();
      });

  }
  getTodoList() {
    return this.todoItems;
  }
  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }
  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
    //this.todoItems = [...this.todoItems];
  }
}
