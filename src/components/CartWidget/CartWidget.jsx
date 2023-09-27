import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const cartItemCount = 5;

  return (
    <div className="cart-widget">
      <i>
        <div className="" />
        <img
          className="icono-carrito"
          src="/img/iconos/carrito-rosa.png"
          alt=""
        />
      </i>
      {cartItemCount > 0 && (
        <span className="cart-item-count">{cartItemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
