import {ADD_CART,REMOVE_CART} from "../constants/types"



export const addItemHandler = data => (dispatch,getState) => {
 const {totalAmount} = getState().cart
 const {cart: carts} = getState()

 const updatedTotalAmount = totalAmount + data.price * data.amount
 const existingCartItemIndex = carts.items?.findIndex(
    (item) => item.id === data.id
  );
  const existingCartItem = carts.items?.[existingCartItemIndex];

  let updatedItems;

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + data.amount,
    };
    updatedItems = [...carts.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = carts.items?.concat(data);
  }
  dispatch({
   type: ADD_CART,
   items: updatedItems,
   totalAmount: updatedTotalAmount
  })
}


export const removeItemHandler = id => (dispatch,getState) => {
  const {items,totalAmount} = getState().cart
  const existingCartItemIndex = items.findIndex(
      (item) => item.id === id
    );
  const existingItem = items[existingCartItemIndex];
  const updatedTotalAmount = totalAmount - existingItem.price;
  let updatedItems;
  if (existingItem.amount === 1) {
    updatedItems = items.filter(item => item.id !== id);
  } else {
    const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
    updatedItems = [...items];
    updatedItems[existingCartItemIndex] = updatedItem;
  }

  dispatch({
    type: REMOVE_CART,
    items: updatedItems,
    totalAmount: updatedTotalAmount
  }) 
}