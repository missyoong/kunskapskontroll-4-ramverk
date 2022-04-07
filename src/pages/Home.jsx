import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators"></div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              class="d-block w-100"
              alt="blueimg"
              height="180vh"
            />
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
