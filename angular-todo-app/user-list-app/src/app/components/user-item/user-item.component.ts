import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html'
})
export class UserItemComponent {
  @Input() user: any;
}