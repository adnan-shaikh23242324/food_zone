import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
            console.log(item.quantity);
            
             
        });
        // console.log(this.);
        
        return totalPrice
    }

}