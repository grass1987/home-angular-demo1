import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() items: TodoItem[];
  getBlueClass() {
    // 這裡可以用程式動態決定要回傳字串、陣列或物件
    return 'blue';
  }
  
  itemClick(item){
    if(item.done==true)
      item.done=false;
    else
      item.done=true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
