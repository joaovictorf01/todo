import { Component } from '@angular/core';
import { TaskList } from '../model/task';
import { mockTaskList } from '../taskMock';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  task: TaskList[] = mockTaskList;
}
