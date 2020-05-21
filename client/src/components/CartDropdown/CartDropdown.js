import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/cartSelector";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "../../Redux/Cart/cartAction";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    
      <div className="hidden" onClick={()=>dispatch(ToggleCartHidden())}>&#10006;</div>
    
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="empty-message">Your cart is empty!</div>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/Checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT!
    </CustomButton>
  </div>
);
const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
  });
  
export default withRouter(connect(mapStateToProps,null)(CartDropdown));
