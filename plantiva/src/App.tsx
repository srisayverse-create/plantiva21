import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { C } from './constants/designSystem';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Book from './pages/Book';
import About from './pages/About';
import Store from './pages/Store';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirm from './pages/OrderConfirm';
import Dashboard from './pages/Dashboard';
import VisitReport from './pages/VisitReport';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function RouteWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll reveal animation observer
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Custom navigate mapper to adapt the legacy navigate(target, data) logic
  const handleNavigate = (target: string, data: any = null) => {
    const routesMap: Record<string, string> = {
      home: '/',
      services: '/services',
      "service-detail": '/service-detail',
      book: '/book',
      about: '/about',
      store: '/store',
      "product-list": '/product-list',
      "product-detail": '/product-detail',
      cart: '/cart',
      checkout: '/checkout',
      "order-confirm": '/order-confirm',
      dashboard: '/dashboard',
      "visit-report": '/visit-report',
      membership: '/membership',
      profile: '/profile',
      admin: '/admin',
    };

    const path = routesMap[target] || '/';
    navigate(path, { state: data });
    window.scrollTo(0, 0);
  };

  // Find which target page key matches the current pathname
  const pathMap: Record<string, string> = {
    '/': 'home',
    '/services': 'services',
    '/service-detail': 'service-detail',
    '/book': 'book',
    '/about': 'about',
    '/store': 'store',
    '/product-list': 'product-list',
    '/product-detail': 'product-detail',
    '/cart': 'cart',
    '/checkout': 'checkout',
    '/order-confirm': 'order-confirm',
    '/dashboard': 'dashboard',
    '/visit-report': 'visit-report',
    '/membership': 'membership',
    '/profile': 'profile',
    '/admin': 'admin',
  };

  const currentPage = pathMap[location.pathname] || 'home';

  const props = { navigate: handleNavigate };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: C.text, lineHeight: 1.5 }}>


      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/services" element={<Services {...props} />} />
        <Route path="/service-detail" element={<ServiceDetail {...props} />} />
        <Route path="/book" element={<Book {...props} />} />
        <Route path="/about" element={<About {...props} />} />
        <Route path="/store" element={<Store {...props} />} />
        <Route path="/product-list" element={<ProductList {...props} />} />
        <Route path="/product-detail" element={<ProductDetail {...props} />} />
        <Route path="/cart" element={<Cart {...props} />} />
        <Route path="/checkout" element={<Checkout {...props} />} />
        <Route path="/order-confirm" element={<OrderConfirm {...props} />} />
        <Route path="/dashboard" element={<Dashboard {...props} />} />
        <Route path="/visit-report" element={<VisitReport {...props} />} />
        <Route path="/membership" element={<Membership {...props} />} />
        <Route path="/profile" element={<Profile {...props} />} />
        <Route path="/admin" element={<Admin {...props} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
}
