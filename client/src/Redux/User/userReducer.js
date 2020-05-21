import actionTypes from "./actionTypes";
const InitialState = {
    currentUser:null,
    error:null
}
const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        
        case actionTypes.SIGNINSUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                error:null
            }
        case actionTypes.SIGNOUTSUCCESS:
            return{
                ...state,
                currentUser:null,
                error:null
            }
        case actionTypes.SIGNOUTFAILURE:
        case actionTypes.SIGNINFAILURE:
        case actionTypes.SIGNUPFAILURE:
            return {
                ...state,
                error:action.payload
            }
       
        default:
            return state
    }
}
export default userReducer;