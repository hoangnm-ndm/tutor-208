import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  company = {
    name: 'Google Inc',
    address: 'Mỹ Đình',
  };
  handleClick() {
    console.log('Chao moi nguoi!');
  }
}
