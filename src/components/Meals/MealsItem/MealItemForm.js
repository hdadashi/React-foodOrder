import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

export default function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    let enteredAmount = amountInputRef.current.value;
    enteredAmount = +enteredAmount;

    if (enteredAmount.toString().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="تعداد" input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}></Input>
        <button>اضافه+</button>
        {!amountIsValid && <p>لطفا مقدار مجاز وارد کنید (۱-۵).</p>}
      </form>
    </>
  );
}