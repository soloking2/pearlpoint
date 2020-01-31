import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MycartComponent } from '../Cart/mycart.component';
import { CheckoutComponent } from '../Checkout/checkout.component';
import { ThankYouComponent } from '../Checkout/thank-you.component';

@NgModule({
  declarations: [
    ShopListComponent,
    MycartComponent,
    CheckoutComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'items', component: ShopListComponent},
      {path: 'mycart', component: MycartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'thankyou', component: ThankYouComponent}
    ])
  ]
})
export class ShopModule { }
