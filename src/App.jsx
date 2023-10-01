import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import EventHandling from "./components/EventHandling";
import StateManagement from "./components/StateManagement";
import Todo from "./components/Todo";
import Chat from "./components/Chat";
import ProductList from "./components/ProductList";
import Chatting from "./components/Chat_sir";
import Contact from "./components/Contact";
import { useState } from "react";
import { AppProvider } from "./AppContext";
import UserAuth from "./UserAuth";
import UserManager from "./components/UserManager";
import { Toaster } from "react-hot-toast";
import UpdateUser from "./components/UpdateUser";
import { CartProvider } from "./CartContext";
import CartPage from "./components/CartPage";
import UsingCharts from "./components/UsingCharts";

function App() {
  let cartitems = 20; //props means property. advantage of global variable is that it can be change
  return (
    <div>
      {/* <h1>My react tab</h1> */}
      <Toaster position = "top-right"/>

      <BrowserRouter>
        <AppProvider>
          <CartProvider>
          {/* rouetes mtlb address create krna */}
          {/* <Link to ="/login">Login</Link> */}
          {/* <Link to ="/signup">Signup</Link> */}
          <Navbar mycart={cartitems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/event" element={<EventHandling />} />
            <Route path="/state" element={<StateManagement />} />
            <Route path="/todo" element={<UserAuth> <Todo /> </UserAuth>}/>
            <Route path="/chat" element={<UserAuth> <Chat /> </UserAuth>}/>
            <Route path="/product" element={<ProductList />} />
            <Route path="/chatting" element={<Chatting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usermanager" element={<UserManager />} />
            <Route path="/updateuser/:id" element={<UpdateUser />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/charts" element={<UsingCharts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </CartProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
