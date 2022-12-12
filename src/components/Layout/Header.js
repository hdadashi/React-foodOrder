import React, { useContext } from "react";
import meals_jpg from "../Asset/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header} dir="rtl">
        <h1>لیست غذا</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={meals_jpg}></img>
      </div>
    </>
  );
}