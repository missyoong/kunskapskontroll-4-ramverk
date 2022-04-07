import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import productState from "../recoil/product/atom";
import usersState from "../recoil/users/atom";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import authState from "../recoil/auth/atom";

import axios from "axios";

function Admin() {
  const [product, setProduct] = useRecoilState(productState);
  const [users, setUsers] = useRecoilState(usersState);
  const userData = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);

  function Users() {
    axios.get("https://k4backend.osuka.dev/users").then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    Users();
  }, []);

  if (!userData.user) {
    return <div>Not logged in</div>;
  }

  if (userData.user.role !== "admin") {
    return <div>Only admin can view this page</div>;
  }

  const usersItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "14rem" }}>
        <div class="card-body text-center">
          <h5 class="card-title">{item.username}</h5>
        </div>
      </div>
    );
  };

  console.log(users);

  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "14rem" }}>
        <img src={item.image} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-13 text-center">
            <h1>Admin dashboard</h1>
            <button
              onClick={() => reset()}
              className="btn btn-outline-secondary"
            >
              Log Out
            </button>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-13 text-center">
        <h1>Users</h1>
      </div>
      <div className="row justify-content-around">{users.map(usersItem)}</div>

      <div className="col-13 text-center">
        <h1>Products</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {product.map(cardItem)}
        </div>
      </div>
    </div>
  );
}

export default Admin;
