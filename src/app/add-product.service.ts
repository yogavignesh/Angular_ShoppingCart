import { Injectable } from '@angular/core';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  products: product[] = [];

  constructor() { }

  addProduct(name: string, qty : number){
    console.log("Inside service addproduct ", name, qty);
    if (this.products.length>0){
      let index =this.products.findIndex(x => x.productName === name);
      if(index!=-1){
        console.log("index ", index);
        this.products[index].quantity= Number(this.products[index].quantity) + Number(qty);
      }
      else{
        this.products.push(new product(name, qty));        
      }
      
    }
    else{
      this.products.push(new product(name, qty));
      console.log("Inside service addproduct ", name, qty);
    }
  
  }
  delItem(name: string, qty : number){
    console.log("Inside service addproduct ", name, qty);
    if (this.products.length>0){
      let index =this.products.findIndex(x => x.productName === name);
      if(index!=-1){
        console.log("index ", index);
        this.products[index].quantity= Number(this.products[index].quantity) - Number(qty);
        if(this.products[index].quantity==0){
          this.products.splice(index,1);
          console.log("No Items in the cart");
        }
      }
           
    }
    else{
      console.log("No Items in the cart");
    }
  }
  delProduct(name: string, qty : number){
    if (this.products.length>0){
      let index =this.products.findIndex(x => x.productName === name);
      if(index!=-1){
          this.products.splice(index,1);
        }
                
    }
  }
}
