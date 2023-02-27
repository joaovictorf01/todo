import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-input', component: TaskInputComponent },
  { path: '', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
