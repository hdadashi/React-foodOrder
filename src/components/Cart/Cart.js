import classes from './Cart.module.css';
import Modal from '../UI/Modal';

String.prototype.toPersinaDigit = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) { return id[+w] });
}

export default function Cart(props) {

  let order = [{ id: 'c1', name: 'سوشی', amount: 2, price: 120000 }];
  const cartItems = <ul style={{ direction: "rtl" }}> {order.map(item => item.name)}</ul >;
  const totalPrice = order[0].amount * order[0].price;

  return (
    <>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>جمع کل</span>
          <span>{totalPrice.toString().toPersinaDigit() + ' تومان'}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>بستن</button>
          <button className={classes.button}>سفارش</button>
        </div>
      </Modal>
    </>
  );
}