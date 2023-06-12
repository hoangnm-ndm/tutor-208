import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/sevices/products.service';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  formProductAdd = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0],
    desc: ['']
  })
  constructor(private productService: ProductsService, private formBuilder: FormBuilder) { }

  onHandleSubmit() {
    if (this.formProductAdd.valid) {
      const product: IProduct = {
        name: this.formProductAdd.get('name')?.value || '',
        price: this.formProductAdd.get('price')?.value || 0,
        desc: this.formProductAdd.get('desc')?.value || '',
      }
      this.productService.addProduct(product).subscribe({
        next: (data) => {
          console.log(data);
          this.formProductAdd.reset();
        },
        error: (err) => console.log(err),
        complete: () => console.log('done')
      })
    }
  }
}
