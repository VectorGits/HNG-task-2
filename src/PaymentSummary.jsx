import React from 'react';

const PaymentSummary = () => {
  return (
    <div className="bg-yellow-100 p-6 rounded-lg mb-4">
      <h3 className="font-bold mb-4">Payment Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Total MRP</span>
          <span>₦800</span>
        </div>
        <div className="flex justify-between">
          <span>Discount on HRP</span>
          <span>₦400</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Savings</span>
          <span>₦400</span>
        </div>
        <div className="flex justify-between">
          <span>Applicable GST</span>
          <span>₦200</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <div className="border-t border-gray-300 mt-4"></div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>₦28,750</span>
        </div>
        <button className="w-full bg-yellow-500 text-black font-bold py-2 mt-4 rounded-lg">
          START CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
