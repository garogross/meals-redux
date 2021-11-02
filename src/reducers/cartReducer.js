import {ADD_CART,REMOVE_CART} from "../constants/types"



const initialState = {
 items: [],
 totalAmount: 0,
}

export const cartReducer = (state = initialState,action) => {
 const {type,totalAmount,items} = action
 switch (type) {
  case ADD_CART:
  return {
   ...state,
   totalAmount,
   items
  }
  case REMOVE_CART:
  return {
   ...state,
   totalAmount,
   items
  }
  default:
  return state
 }
}