import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop/shop-service.service';
import { Product } from '../Models/product';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  productAddedToCart: Product[];
  cartItemCount;
  allTotal: number;

  constructor(private productService: ShopService, private sharedService: SharedService) { }

  ngOnInit() {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.cartItemCount = this.productAddedToCart.length;
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

}
