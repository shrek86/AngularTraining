import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cart-summary.component';



@NgModule({
  declarations: [StoreComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    ModelModule 
  ],
  exports : [StoreComponent]

})
export class StoreModule {



 }
