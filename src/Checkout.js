import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" className="checkout_adv" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
                

            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout;