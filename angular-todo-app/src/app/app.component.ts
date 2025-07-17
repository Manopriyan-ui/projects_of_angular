import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo App';
  newTask = ''; // For two-way binding
  tasks: Task[] = [
    { name: 'Learn Angular', completed: false, createdAt: new Date() },
    { name: 'Build a todo app', completed: true, createdAt: new Date() }
  ];
  showCompleted = true; // For *ngIf

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        name: this.newTask,
        completed: false,
        createdAt: new Date()
      });
      this.newTask = ''; // Clear input
    }
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  clearTasks() {
    this.tasks = [];
  }

  get isClearButtonDisabled() {
    return this.tasks.length === 0; // Disable if no tasks
  }
}