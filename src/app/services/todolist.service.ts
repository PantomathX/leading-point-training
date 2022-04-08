import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todoList: Todo[] = [];
  
  constructor() { }
  
  addNewTodoItem(message: string){
    this.todoList.push({
      title: message,
      date: new Date(),
      done: false
    })
  }

}
