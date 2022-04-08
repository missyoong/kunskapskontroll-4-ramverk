import React from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import productState from "../recoil/product/atom";
import { useState } from "react";
import cartState from "../recoil/cart/atom";

function ProductPage() {
  const [product, setProduct] = useRecoilState(productState);
  const [cart, setCart] = useRecoilState(cartState);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [amount, setAmount] = useState(0);
  const productid = useParams();
  const productDetail2 = product.find((product) => product.id === productid.id);

  console.log(productDetail2);

 
  const productDetail = product.filter((x) => x.id === parseInt(productid.id));
  console.log(product);
  console.log(productDetail);

  function handleAdd(product) {
    if (amount !== 0) {
      const newCart = {
        id: Math.floor(Math.random() * 10000),
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
          rate: product.rating.rate,
          count: product.rating.count,
        },
        amount: amount,
      };

      setCart((prevCart) => {
        return [...prevCart, newCart];
      });
    }
  }

  console.log(cart);

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img
            src={productDetail[0].image}
            alt={productDetail[0].title}
            height="400px"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">{productDetail[0].title}</h1>
          <hr />
          <h2 className="my-4">${productDetail[0].price}</h2>
          <p className="lead">{productDetail[0].description}</p>
          <button
            onClick={() => handleAdd(productDetail[0])}
            className="btn btn-outline-secondary"
          >
            Add product
          </button>
          <input type="number" onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
