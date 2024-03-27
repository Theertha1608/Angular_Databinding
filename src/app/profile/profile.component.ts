import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
user = {
    name: 'Niya',
    email: 'niya@example.com',
    website: 'www.example.com',
    location: 'Calicut'
  };
}
