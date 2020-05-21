import {actionTypes} from "./actionTypes";
export const ToggleCartHidden=()=>({
    type: actionTypes.TOGGLECARTHIDDEN
    
})
export const AddItem=(item)=>({
    type:actionTypes.ADDITEMS,
    payload:item
})
export const ClearItemFromCart=(item)=>({
    type:actionTypes.CLEARITEMFROMCART,
    payload:item
})
export const RemoveOne=(item)=>({
    type:actionTypes.REMOVEONE,
    payload:item
})
export const ClearCart=()=>({
    type:actionTypes.CLEARCART
})