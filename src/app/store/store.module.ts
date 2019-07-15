import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cart-summary.component';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [StoreComponent, CartSummaryComponent, 
    CartDetailComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ModelModule ,
    RouterModule
  ],
  exports : [StoreComponent , CheckoutComponent ,  CartDetailComponent]

})
export class StoreModule {



 }
