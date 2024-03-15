import { Component, NgModule, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgFor,NgIf } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { Root } from '../interface';
import { MatDialog } from '@angular/material/dialog';
//import { MatdialogComponent } from '../matdialog/matdialog.component';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
 http = inject(HttpClient);
  posts: Root[] = [];
  showProducts = false;
  filterText: string = ''; 

  ngOnInit(): void {
    this.fetchposts();
  }

  fetchposts() {
    this.http.get('https://uiexercise.theproindia.com/api/Product/GetAllProduct')
      .subscribe((posts: any) => {
       
        this.posts = posts;

      });
  }
  toggleProducts() {
    if (!this.showProducts) {
      this.fetchposts(); 
    }
    this.showProducts = !this.showProducts;
  }

}

export class PostModule {}

