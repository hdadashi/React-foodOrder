import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

String.prototype.toPersinaDigit = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) { return id[+w] });
}

export default function MealItem(props) {
  let price = props.price.toString();
  price = price.toPersinaDigit() + " تومان";

  const cartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: price.price
    })
  };

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
        </div>
      </li>
    </>
  );
}