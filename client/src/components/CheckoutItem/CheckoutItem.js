import React from "react";
import "./CheckoutItem.scss";
import { ClearItemFromCart } from "../../Redux/Cart/cartAction";
import { connect } from "react-redux";
import { RemoveOne, AddItem } from "../../Redux/Cart/cartAction";

const Checkout = ({ cartItems, clearItem, removeOne,addItem }) => {
  const { imageUrl, name, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="remove" onClick={() => removeOne(cartItems)}>
          &#10094;
        </div>
        {quantity}
        <div className="remove" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10006;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
  removeOne: (item) => dispatch(RemoveOne(item)),
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(Checkout);
