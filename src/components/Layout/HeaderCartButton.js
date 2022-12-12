import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

String.prototype.toPersinaDigit = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) { return id[+w] });
}

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  let numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  numberOfCartItems = numberOfCartItems.toString().toPersinaDigit();
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>سبد خرید</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
}