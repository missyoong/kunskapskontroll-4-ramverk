import React from "react";
import { NavLink } from "react-router-dom";
import cartState from "../../recoil/cart/atom";
import { useRecoilValue } from "recoil";

function CartBtn() {
  //här anropar jag värdet
  const cartData = useRecoilValue(cartState);
  return (
    <>
      <NavLink to="/cart" className="btn btn-light">
        <span className="fa fa-shopping-cart"></span> Cart {cartData.length}
      </NavLink>
    </>
  );
}

export default CartBtn;
