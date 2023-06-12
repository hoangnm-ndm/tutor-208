import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/sevices/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product!: IProduct;
  formProductEdit = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0],
    desc: ['']
  })
  constructor(private route: ActivatedRoute, private productService: ProductsService, private formBuilder: FormBuilder) {
    // Sử dụng service ActivatedRoute để lấy id từ url
    this.route.paramMap.subscribe((param: any) => {
      const id = String(param.get('id'));
      // Sử dụng service ProductsService để lấy thông tin sản phẩm theo id
      this.productService.getProductById(id).subscribe(
        (product) => {
          // Gán thông tin sản phẩm vào thuộc tính product
          this.product = product;
          // Gán thông tin sản phẩm vào form
          this.formProductEdit.patchValue(product);
        },
        (error) => console.log(error.message)
      );
    });
  }

  onHandleSubmit() {
    if (this.formProductEdit.valid) {

      const product: IProduct = {
        name: this.formProductEdit.get('name')?.value || '',
        price: this.formProductEdit.get('price')?.value || 0,
        desc: this.formProductEdit.get('desc')?.value || '',
      }

      this.productService.editProduct(product).subscribe({
        next: (data) => {
          console.log(data);
          this.formProductEdit.reset();
        },
        error: (err) => console.log(err),
        complete: () => console.log('done')
      })
    }
  }
}
