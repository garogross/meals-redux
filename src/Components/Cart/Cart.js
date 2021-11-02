import React from 'react'
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import {useDispatch,useSelector} from "react-redux"
import {addItemHandler,removeItemHandler} from "../../actions/cartActions"

const Cart = (props) => {
 const {totalAmount,items} = useSelector(state => state.cart)
 const totalAmountToFixed = `$${totalAmount.toFixed(2)}`
 const hasItems = items.length > 0
 const dispatch = useDispatch()


  const cartItemRemoveHandler = (id) => {
   dispatch(removeItemHandler(id))

 }
  const cartItemAddHandler = (item) => {
   dispatch(addItemHandler({...item,amount: 1}))
 }
 

 const cartItems = (
  <ul className={classes["cart-items"]}>
   {items.map(item => (
    <CartItem
     key={item.id} 
     name={item.name}
     amount={item.amount}
     price={item.price}
     onRemove={cartItemRemoveHandler.bind(null, item.id)}
     onAdd={cartItemAddHandler.bind(null,item)}
     
     />
   ))}
  </ul>
 )
 return (
  <Modal onClose={props.onClose}>
   {cartItems}
   <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalAmountToFixed}</span>
   </div>
   <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button}>Order</button>}
    
   </div>
  </Modal>
 )
}

export default Cart
