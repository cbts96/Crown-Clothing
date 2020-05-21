import {actionTypes} from "./actionTypes";
import {addItemToCart,removeItem} from "./cartUtil";
const InitialState = {
    hidden:true,
    cartItems:[],
}
const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLECARTHIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case actionTypes.ADDITEMS:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case actionTypes.CLEARITEMFROMCART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case actionTypes.REMOVEONE:
            return{
                ...state,
                cartItems:removeItem(state.cartItems,action.payload)
            }
        case actionTypes.CLEARCART:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state
    }
}
export default cartReducer;