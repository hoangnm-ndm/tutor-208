import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  onHandleSubmit(formValue: NgForm) {
    console.log(formValue.value);
  }
}
