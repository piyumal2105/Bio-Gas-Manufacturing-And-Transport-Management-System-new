import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AdminLogin from "./components/AdminLogin/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import UserLogin from "./pages/UserLogin/UserLogin.jsx";
import AboutUs from "./pages/About Us/AboutUs.jsx";
import Customer from "./pages/Customer/Customer.jsx";
import AdminInventory from "./pages/Inventory/AdminInventory.jsx";
import Product from "./pages/Inventory/Product.jsx";
import ContactUs from "./pages/Contact Us/ContactUs.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/allcustomer" element={<Customer />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
