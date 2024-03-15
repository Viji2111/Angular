import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] 
})
export class AddProductComponent {
  errorOccurred: boolean = false;
  existingProducts: any[] = []; // Array to store existing products

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  fetchExistingProducts() {}

  ngOnInit() {
    this.fetchExistingProducts(); 
  }

  AddProduct(productdetails: { ProductName: string, Quantity: number }) {
    const productdata = {
      ...productdetails,
      isActive: true,
      ProductId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" 
    };


    if (this.productExists(productdata.ProductId)) {
      this.openSnackBar('Product already exists', 'Close');
      return;
    }

    this.http.post('https://uiexercise.theproindia.com/api/Product/AddProduct', productdata)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error(error);
          this.errorOccurred = true;
          this.openSnackBar('Error occurred while adding product', 'Close');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


  productExists(productId: string): boolean {

    for (const product of this.existingProducts) {
      if (product.ProductId === productId) {
        return true; 
      }
    }
    return false; 
  }
}




