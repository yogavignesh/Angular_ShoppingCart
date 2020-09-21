import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';
import { AddProductService } from '../add-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService : AddProductService) { }

  selectedProducts : product[] = [];

  ngOnInit(): void {

    this.selectedProducts= this.productService.products;

  }
  noItems(){
    if(this.selectedProducts.length<1){
      return "block";
    }
    else{
      return "none";
    }
  }

}
