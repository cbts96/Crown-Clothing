import React from "react";
import "./Checkout.scss";
import {createStructuredSelector} from "reselect";
import {selectCartTotal,selectCartItems} from "../../Redux/Cart/cartSelector";
import {connect} from "react-redux";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import StripeButton from "../StripeButton/StripeButton";

const Checkout=({totalPrice,cartItems})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
           
        </div>
        {cartItems.map((item)=>{
                return <CheckoutItem key={item.id} cartItems={item}></CheckoutItem>
            })}
        <div className="total">
        Total: {totalPrice}$
        </div>
        <div className="credit">
            <p>*Please use the following test credit</p>
            <p className="exp">4242 4242 4242 4242- Exp:12/20 or Later- CW: 123</p>
            <StripeButton price={totalPrice} />
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    totalPrice: selectCartTotal,
    cartItems: selectCartItems
})
   

export default connect(mapStateToProps, null )(Checkout)