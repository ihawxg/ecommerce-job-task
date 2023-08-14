
import { Home, Cart, About, Products, Checkout, Error, PrivateRoute, SingleProduct, AuthWrapper } from './pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar'
import Footer from "./Components/Footer";
import Sidebar from './Components/Sidebar';

import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"></ToastContainer>
      <AuthWrapper>
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
      </AuthWrapper>
    </>
  );
}

export default App;
