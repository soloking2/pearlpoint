import { Component, OnInit } from '@angular/core';
import { IShop } from './shop';
import { ShopService } from './shop-service.service';
import { Alerts } from '../Models/alerts';
import { Product } from '../Models/product';
import { SharedService } from '../Services/shared.service';

@Component({
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  allItems: IShop[];
  errorMesage: string;
  listFilter: Number;
  imageWidth = 90;
  imageHeight = 70;
  public alerts: Array<Alerts> = [];
  public globalResponse: any;
  productAddedToCart: Product[];
  // tslint:disable-next-line: no-inferrable-types
  cartItemCount: number = 0;
  addedToCart: Boolean = false;

  constructor(private productService: ShopService, private sharedService: SharedService) { }

  ngOnInit() {
   this.productService.getItems().subscribe(
     (result) => {
       this.globalResponse = result;
     },
     error => {
       console.log(error.message);
     },
     () => {
       console.log('All Products fetched successfully');
       this.allItems = this.globalResponse;
     }
   );
  }

  onAddCart(product: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    if (this.productAddedToCart === null) {
      this.productAddedToCart = [];
      this.productAddedToCart.push(product);
      this.productService.addProductToCart(this.productAddedToCart);
      this.addedToCart = true;
      this.alerts.push({
        id: 1,
        type: 'sucesss',
        message: 'Product added to cart'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);
    } else {
      this.productAddedToCart.push(product);
      this.productService.addProductToCart(this.productAddedToCart);
      this.addedToCart = true;
      this.alerts.push({
        id: 1,
        type: 'sucesss',
        message: 'Product added to cart'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);
    }
    this.cartItemCount = this.productAddedToCart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
