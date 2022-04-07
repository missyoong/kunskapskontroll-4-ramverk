import React from "react";
import { NavLink } from "react-router-dom";
import cartState from "../../recoil/cart/atom";
import { useRecoilValue } from "recoil";

function LoginBtn() {
  //här anropar jag värdet
  return (
    <>
      <NavLink to="/Login" className="btn btn-light">
        <span className="fa fa-sign-in"></span> Login {}
      </NavLink>
    </>
  );
}

export default LoginBtn;
