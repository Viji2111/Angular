import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private items:any[]= [];
  constructor() { }

  Addtocart(post:any){
    this.items.push(post);
  }
  getItems(){
    return this.items;
  }
  delete(item:any){
      this.items = this.items.filter((i) => i.ProductId !== item.ProductId);
  }
}
