
import {actionsTypes} from "./actionTypes";
const InitialState = { collections:null,isFetching:undefined,errorMessage:""}
const shopReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionsTypes.FETCHCOLLECTIONSSSUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case actionsTypes.FETCHCOLLECTIONSSTARTS:
        return {
            ...state,
            isFetching:true
        }
        case actionsTypes.FETCHCOLLECTIONSFAILURE:
        return {
            ...state,
            isFetching:false,
            errorMessage:action.payload
        }
        default:
            return state
    }
}
export default shopReducer;