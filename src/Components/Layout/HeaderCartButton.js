import React, { useState, useEffect } from 'react'
import classes from "./HeaderCartButton.module.css"
import CardIcon from "../Cart/CartIcon"
import {useSelector} from "react-redux"


const HeaderCartButton = (props) => {
 const {items} = useSelector(state => state.cart)
 const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

 const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0)
 const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`

 useEffect(() => {
  if (items.length === 0) {
   return;
  }
  setBtnIsHighlighted(true)
  const timer = setTimeout(() => {
   setBtnIsHighlighted(false)
  }, 500)
  return () => {
   clearTimeout(timer)
  }
 },[items])
 return (
  <button className={btnClasses} onClick={props.onClick}>
   <span className={classes.icon}><CardIcon /></span>
   <span>Your Cart</span>
   <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
 )
}

export default HeaderCartButton
