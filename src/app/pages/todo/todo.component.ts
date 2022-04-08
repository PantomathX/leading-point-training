import { Component} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodolistService } from 'src/app/services/todolist.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(
    public tdList: TodolistService
  ) {}

}
