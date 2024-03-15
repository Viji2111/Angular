import { Component, OnInit ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  http = inject(HttpClient);
  posts: any= [];
  cartservice = inject(CartService);

  ngOnInit(): void {
    this.fetchposts();
  }

  fetchposts() {
    this.http.get('https://uiexercise.theproindia.com/api/Product/GetAllProduct')
      .subscribe((posts: any) => {
       
        this.posts = posts;

      });
  }
  Addtocart(post:any){
    this.cartservice.Addtocart(post);
  }

}
