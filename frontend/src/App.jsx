import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AdminLogin from "./components/AdminLogin/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import UserLogin from "./pages/UserLogin/UserLogin.jsx";
import AboutUs from "./pages/About Us/AboutUs.jsx";
import Customer from "./pages/Customer/Customer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/allcustomer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
