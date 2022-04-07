import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import productState from './recoil/product/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Register from './pages/Register';





// hämta produkter här

function App() {
  const [product, setProduct] = useRecoilState(productState);
  useEffect(() => {
    const products = axios
      .get("https://k4backend.osuka.dev/products")
      .then((res) => {
        // hämta listan på produkter och spara i produktstore
        setProduct(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
        <Route exact path="/login" element={<LoginPage /> } />
        <Route exact path="/cart" element={<Cart /> } />
        <Route exact path="/admin" element={<Admin /> } />
        <Route exact path="/profile" element={<Profile /> } />
        <Route exact path="/register" element={<Register /> } />



      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
