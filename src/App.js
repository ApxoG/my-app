import "./App.css";
import Layout from "./components//dashboard/Layout/index";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/marketplace/Login";
import Register from "./pages/marketplace/Register";
import Contact from "./pages/dashboard/Contact";
import NotFound from "./pages/NotFound";
import CalculateNumbers from "./components/marketpalce/CalculateNumbers";
import SingleProduct from "./pages/marketplace/SingleProduct";
import Dashboard from "./pages/dashboard/index";
import Header from "./components/marketpalce/layout/Header";
import Footer from "./components/marketpalce/layout/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const hasToken = localStorage.getItem("token");

  useEffect(() => {
    if (hasToken) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [hasToken]);

  const user = {
    name: "John",
    email: "john@comm.com",
    isAdmin: isAdmin,
  };
  return (
    <BrowserRouter>
      {/* This will support for Admin users only */}
      {user?.isAdmin ? (
        <div className="p-4 bg-off_white flex gap-4">
          <Layout />
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="customers" element={<CalculateNumbers />} />
            <Route path="reports" element={<div>reports </div>} />
            <Route path="geography" element={<div>geography </div>} />
            <Route path="conversations" element={<div>conversations </div>} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<CalculateNumbers />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
      {/* This will support for all users */}
    </BrowserRouter>
  );
}

export default App;
