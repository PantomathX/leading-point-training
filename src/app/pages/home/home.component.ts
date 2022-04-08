import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todolist: Todo[] = [];
  constructor(
    public tdS: TodolistService
  ) { 
    this.todolist =  this.tdS.todoList.slice(0,2);
  }

  ngOnInit(): void {
  }

}
