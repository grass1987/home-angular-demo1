import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';
import { TodoListService } from '../todo-list.service';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoListService: TodoListService) { }
  getBlueClass() {
    // 這裡可以用程式動態決定要回傳字串、陣列或物件
    return 'blue';
  }
  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
  ngOnInit() {
    this.todoListService.loadTodoList();
  }

}
