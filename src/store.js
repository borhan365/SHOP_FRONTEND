
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'
import { productDetailsReducers, productListReducers } from './reducers/productListReducers'

const reducer = combineReducers({
    productList : productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
})

const cartItemFromStroage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []


const initialState = {
  cart: { cartItems: cartItemFromStroage }
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store