import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() addTask: EventEmitter<string> = new EventEmitter<string>();
  addNewTask() {
    this.addTask.emit(this.inputTask);
    this.inputTask = '';
  }
  task: TaskList[] = mockTaskList;
}
