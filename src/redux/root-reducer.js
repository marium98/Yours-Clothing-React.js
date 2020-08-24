//all the reducers are going to be placed in this file
//user reducer is going to be the reducer that stores the satet of the current user

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //get the local storage on our window browser

import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//simple a JSON object
const persistConfig = {
  key:'root',
  storage,
  //whitelist propert is the array containing the strings names of any reducer that we want to store
  whitelist:['cart'] //as user is handled by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig,rootReducer);