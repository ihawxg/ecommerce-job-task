
import { Home, Cart, About, Products, Checkout, Error, PrivateRoute, SingleProduct } from './pages/index';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Nav from './Components/Navbar'
import Footer from "./Components/Footer";
import Sidebar from './Components/Sidebar';


function App() {

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path='checkout' element={<PrivateRoute> <Checkout /></PrivateRoute>} />
        <Route path="products/:id" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
