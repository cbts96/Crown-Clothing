import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from"redux-persist/lib/storage";
import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";
import shopReducer from "./Shop/shopReducer";
import directoryReducer from "./Directory/directoryReducer";

const persistConfig={
    key: "root",
    storage,
    whitelist:["cart"]
}
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    shop:shopReducer,
    directory:directoryReducer
})
export default persistReducer(persistConfig,rootReducer);