import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { Product } from '../Models/product';
import { ShopService } from '../shop/shop-service.service';
import { Alerts } from '../Models/alerts';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  public alerts: Array<Alerts> = [];
  // tslint:disable-next-line: no-inferrable-types
  cartItemCount: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  defaultQuantity: number = 1;
  productAddedToCart: Product[];
  allTotal: number;

  constructor(private sharedService: SharedService, private productService: ShopService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this.productAddedToCart = this.productService.getProductFromCart();

    for (let i = 0; i < this.productAddedToCart.length; i += 1) {
      this.productAddedToCart[i].Quantity = 1;
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  onAddQuantity(product: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.productAddedToCart.find(p => p.Id === product.Id).Quantity = product.Quantity + 1;

    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  onRemoveQuantity(product: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.productAddedToCart.find(p => p.Id === product.Id).Quantity = product.Quantity - 1;

    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  calculateAllTotal(allItems: Product[]) {
    let total = 0;
    // tslint:disable-next-line: forin
    for (const item in allItems) {
      total = total +  (allItems[item].Quantity * allItems[item].UnitPrice);
    }
    this.allTotal = total;
  }

  public closeAlert(alert: Alerts) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
