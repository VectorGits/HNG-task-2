import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';
import Wishlist from './Wishlist.jsx';
import Cart from './Cart.jsx';

// After installing react router-dom, import the needed "functions"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// A custom component to wrap the layout and conditionally render the sidebar
function AppLayout() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/wishlist' && location.pathname !== '/cart';

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-grow overflow-x-hidden">
        {showSidebar && <Sidebar />}
        <div className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppLayout />
    </Router>
  </React.StrictMode>
);
