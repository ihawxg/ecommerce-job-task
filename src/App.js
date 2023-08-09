
import { Home,Cart,About,Products,Checkout,Error } from './pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar'
import Footer from "./Components/Footer";





function App() {

  return (


    <BrowserRouter>
      
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
