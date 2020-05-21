import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
//import { auth } from "../../Firebase/FirebaseUtil";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../Redux/Cart/cartSelector";
import { selectCurrentUser } from "../../Redux/User/userSelector";
import {signOutStart} from "../../Redux/User/userAction";

const Header = ({ currentUser, hidden, signOutSaga }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOutSaga}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon className="option" />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOutSaga: () => {
      dispatch(signOutStart())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
