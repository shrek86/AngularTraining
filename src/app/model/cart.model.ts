import { Product } from './product.model';
import { Injectable } from '@angular/core';




@Injectable()
export class Cart{

    public lines : CartLine [] = [];
    public itemCount : number = 0;
    public cartPrice: number = 0;

    clear(){
    
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }


    addLine(product : Product , quantity : number = 1){
        let line = this.lines.find(line =>
             line.product.id == product.id);
        if(line != undefined){
            line.quantity += Number(quantity);
        }else{
            this.lines.push(new CartLine(product, quantity));
        }

        this.recalculate();
    }

    removeLine(id : number){
        let lineIndex = this.lines.findIndex(line => line.product.id ==id);
        if(lineIndex != undefined){
            this.lines.splice(lineIndex, 1);
            this.recalculate();
        }
    }

    updateQuantity(product : Product ,  quantity:number){
        let line = this.lines.find(line => line.product.id == product.id);
        if(line!= undefined){
            line.quantity = Number(quantity);
        }
    }

    private recalculate(){
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        })
    }

}

export class CartLine{
    constructor(
        public product : Product,
        public quantity: number

    ){

    }

    get lineTotal(){
        return this.quantity * this.product.price;
    }
}