import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string | undefined;
  showUserDetails: boolean;
  btnText: string;
  constructor() {
    this.showUserDetails = false;
    this.btnText = 'Show';
  }

  toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
    this.btnText = this.showUserDetails ? 'Hide' : 'Show';

  }
}
