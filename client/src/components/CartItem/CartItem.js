import React from "react";
import "./CartItem.scss";
import {connect} from "react-redux";
import {ClearItemFromCart} from "../../Redux/Cart/cartAction"

const CartItem = ({ item,del }) => {
  const {imageUrl, name, price, quantity } =item
  return(
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <div className="price">
        {quantity}x{price}$
      </div>
    </div>
    <div className="del" onClick={()=>del(item)}>&#10006;</div>
  </div>)
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    del: (item) => {
      dispatch(ClearItemFromCart(item))
    }
  }
}
export default connect(null, mapDispatchToProps)(CartItem);
