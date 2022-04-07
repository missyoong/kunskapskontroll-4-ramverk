import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

function RegisterBtn() {
  //här anropar jag värdet
  return (
    <>
      <NavLink to="/register" className="btn btn-light">
        <span className="fa fa-user"></span> Create Account {}
      </NavLink>
    </>
  );
}

export default RegisterBtn;
