import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 p-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 flex flex-col items-start">
          <img src="/go-to-store-logo.png" alt="Go-To Store Logo" className="mb-4" />
          <p className="text-gray-600">Go-To Store</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#store" className="hover:underline">Store</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#service1" className="hover:underline">Service 1</a></li>
            <li><a href="#service2" className="hover:underline">Service 2</a></li>
            <li><a href="#service3" className="hover:underline">Service 3</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#facebook" className="hover:underline">Facebook</a></li>
            <li><a href="#twitter" className="hover:underline">Twitter</a></li>
            <li><a href="#instagram" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
