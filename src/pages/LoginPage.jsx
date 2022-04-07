import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { useSetRecoilState } from "recoil";
import authState from "../recoil/auth/atom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setAuth = useSetRecoilState(authState);

  function login(username, password) {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        // method: "POST",
        //body: JSON.stringify({
        username: username,
        password: password,
      })

      .then((res) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
          .then((userData) => {
            console.log(userData.data);
            setAuth({
              user: userData.data,
              token: res.data.token,
            });
            //navigate("/profile");
            navigate(userData.data.role === "user" ? "/profile" : "/admin");
          });
      });
  }

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product"></div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">Login</h1>
            <p></p>

            <form>
              <input
                type="text"
                class="form-control no-border"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p></p>

              <input
                type="password"
                class="form-control no-border"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p></p>
              <input
                type="button"
                className="btn btn-light"
                value="Login"
                onClick={() => login(username, password)}
              />
              <p></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

