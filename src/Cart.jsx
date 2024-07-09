import React from 'react';
import DCart from './DCart';
import Offers from './Offers';
import Coupons from './Coupons';
import Address from './Address';
import PaymentSummary from './PaymentSummary';

const Cart = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6">
      <div className="lg:w-2/3 p-4">
        <Offers />
        <Coupons />
        <DCart />
      </div>
      <div className="lg:w-1/3 p-4">
        <Address />
        <PaymentSummary />
      </div>
    </div>
  );
};

export default Cart;
