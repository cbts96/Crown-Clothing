import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../Redux/Cart/cartAction";
import {selectCartItemCount} from "../../Redux/Cart/cartSelector";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={() => ToggleCartHidden()}>
    <Cart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ToggleCartHidden: () => {
      dispatch(ToggleCartHidden());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemCount(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
