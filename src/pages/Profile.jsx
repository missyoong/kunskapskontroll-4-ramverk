import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import authState from "../recoil/auth/atom";
import { useRecoilValue, useResetRecoil } from "recoil";

function Profile() {
  const userData = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);

 

  if (!userData.user) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product"></div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="display-6 fw-bold">
            {userData.user.name.firstname} {userData.user.name.lastname}
          </h2>
          <hr />
          <h6 className="my-4">
            Firstname: {userData.user.name.firstname}
            <h6 className="my-4">Lastname: {userData.user.name.lastname} </h6>
            <h6 className="my-4">Street: {userData.user.address.street} </h6>
            <h6 className="my-4">City: {userData.user.address.city} </h6>
          </h6>

          <button onClick={() => reset()} className="btn btn-outline-secondary">
            Log Out
          </button>
        </div>
      </div>
    </div>

   
  );
}

export default Profile;
