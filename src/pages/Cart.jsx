import React from "react";
import { NavLink } from "react-router-dom";
import cartState from "../recoil/cart/atom";
import { useRecoilState } from "recoil";

function Cart() {
  const [cartData, setCartData] = useRecoilState(cartState);
  const handleClose = (item) => {
    // cartData = [{ id: 1 }, { id: 2 }, { id: 3 }]
    // item = { id: 1 }
    const newCartData = cartData.filter((product) => product.id !== item.id);
    setCartData(newCartData);
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {cartData.length === 0 && emptyCart()}
      {cartData.length !== 0 && cartData.map(cartItems)}
    </>
  );
}

export default Cart;
