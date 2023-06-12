import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/sevices/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(private productService: ProductsService) { }
  onHandleSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(form.value).subscribe({
        next: (data) => {
          console.log(data);
          form.reset();
        },
        error: (err) => console.log(err),
        complete: () => console.log('done')
      })
    }
  }
}
