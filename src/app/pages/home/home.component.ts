import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: IUser[] = [
    { id: '1', name: 'Tèo', gender: 'male' },
    { id: '2', name: 'Tình', gender: 'male' },
    { id: '3', name: 'Đạt', gender: 'male' },
  ];
}
