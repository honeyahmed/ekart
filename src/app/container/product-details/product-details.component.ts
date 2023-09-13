import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
@Input() productListComp:ProductListComponent=undefined;
product:Product;
ngOnInit(){
  this.product=this.productListComp.selectedProduct;
}
}
