import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newName: string = '';
  newEmail: string = '';
  nameError: boolean = false;
  emailError: boolean = false;

  constructor(private dataService: DataService) {}

  addUser() {
    this.nameError = !this.newName.trim();
    this.emailError = !this.newEmail.trim();

    if (this.nameError || this.emailError) {
      return;
    }

    const newUser = {
      name: this.newName.trim(),
      email: this.newEmail.trim()
    };

    this.dataService.addUser(newUser);

    // ✅ Show alert on success
    alert('User added successfully!');

    // Clear form
    this.newName = '';
    this.newEmail = '';
  }
}
