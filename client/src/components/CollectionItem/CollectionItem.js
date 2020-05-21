import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import {AddItem} from "../../Redux/Cart/cartAction";
import {connect} from "react-redux";

const CollectionItem = ({ item,addItem }) => {
  const {imageUrl,name,price}=item
  return(
  
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
    <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
  </div>
)};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (item) => {
      dispatch(AddItem(item))
    }
  }
}
export default connect(null, mapDispatchToProps)(CollectionItem)
