import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';
import Wishlist from './Wishlist.jsx';

//After installing react router-dom, import the needed "functions" (Forgot what it's called :))
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-grow">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
    </Router>
</React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
// // import About from './About';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Footer />} />
//         {/* <Route path="/about" element={<About />} /> */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
