import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        <div className="col-span-1 flex flex-col items-start">
          <img src="/go-to-store-logo.png" alt="Go-To Store Logo" className="mb-4 w-24" />
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#store" className="hover:underline">Store</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Service</h3>
          <ul className="space-y-2">
            <li><a href="#delivery" className="hover:underline">Delivery</a></li>
            <li><a href="#payments" className="hover:underline">Payments</a></li>
            <li><a href="#contacts" className="hover:underline">Contacts</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#instagram" className="hover:underline">Instagram</a></li>
            <li><a href="#facebook" className="hover:underline">Facebook</a></li>
            <li><a href="#twitter" className="hover:underline">X (Formerly Twitter)</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="p-2 border border-gray-300 rounded-l-lg flex-grow"
            />
            <button
              type="submit"
              className="bg-yellow-700 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
