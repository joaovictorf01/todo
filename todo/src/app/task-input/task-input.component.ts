import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskList } from '../model/task';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  constructor(@Inject(Router) private router: Router) {}

  @Output() addTask = new EventEmitter<string>();
  inputTask: string = '';
  onAddTask(taskName: string) {
    let task: TaskList = {
      taskName: taskName,
      done: false,
    };
    this.addTask.emit(JSON.stringify(task));
    this.inputTask = '';
    this.router.navigate(['']);
  }
}
