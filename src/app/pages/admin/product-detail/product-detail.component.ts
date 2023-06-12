import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/sevices/products.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
    product!: IProduct;
    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService
    ) {
        this.route.paramMap.subscribe((param: any) => {
            const id = String(param.get('id'));
            this.productService.getProductById(id).subscribe(
                (product) => {
                    this.product = product;
                },
                (error) => console.log(error.message)
            );
        });
    }
}
