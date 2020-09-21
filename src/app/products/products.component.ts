import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../add-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : AddProductService) { }

  ngOnInit(): void {
  }

  updateCart(productName: string, quantity: number){
    console.log("Inside Product Component ",productName, quantity)
    this.productService.addProduct(productName, quantity);
   
  }
  deleteItem(productName: string, quantity: number){
    console.log("Inside Product Component ",productName, quantity)
    this.productService.delProduct(productName, quantity);
  }
}
