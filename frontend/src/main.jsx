import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css'
import HomePage from './landing_page/home/Homepage.jsx'
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from "./landing_page/NotFound";
import Signup from "./landing_page/signup/Signup.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/Signup"  element={<Signup/>} />
        <Route path="/About"  element={<AboutPage/>} />
        <Route path="/Pricing"  element={<PricingPage/>} />
        <Route path="/Product"  element={<ProductPage/>} />
        <Route path="/Support"  element={<SupportPage/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
