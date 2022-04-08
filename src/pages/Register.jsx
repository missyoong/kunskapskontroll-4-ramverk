import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { useSetRecoilState } from "recoil";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  function register(newUserData) {
    fetch("https://k4backend.osuka.dev/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    /* axios
      .post("https://k4backend.osuka.dev/users", {
        //method: "POST",
        body: JSON.stringify(newUserData),
      })
      .then((res) => console.log(res));
      */
  }

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product"></div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">Create account</h1>
            <p></p>

            <form>
              <input
                type="text"
                class="form-control no-border"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p></p>

              <input
                type="password"
                class="form-control no-border"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <p></p>

              <input
                type="text"
                class="form-control no-border"
                placeholder="Zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              <p></p>

              <input
                type="tel"
                class="form-control no-border"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p></p>

              <input
                type="button"
                className="btn btn-light"
                value="Create account"
                onClick={() =>
                  register({
                    email: email,
                    username: username,
                    password: password,
                    name: {
                      firstname: firstname,
                      lastname: lastname,
                    },
                    address: {
                      city: city,
                      street: street,
                      number: number,
                      zipcode: zipcode,
                    },
                    phone: phone,
                  })
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
