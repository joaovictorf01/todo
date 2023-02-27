import { Component } from '@angular/core';
import { TaskList } from '../model/task';
import { mockTaskList } from '../taskMock';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],

})
export class TaskListComponent {
  constructor(private router: Router) {}
  inputTask: string = '';
  addTask() {
    console.log('olá');
    this.router.navigate(['task-input']);
  }

  task: TaskList[] = mockTaskList;
}
