import React from 'react';
import CartItem from './CartItem';

const DCart = () => {
  return (
    <div className="p-6 w-full lg:w-2/3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Cart (7)</h2>
        <p className="text-xl font-bold">Total: ₦26,950</p>
      </div>
      <div>
        <CartItem 
          name="Van Gogh Loves U" 
          price="₦3,850" 
          oldPrice="₦5,500" 
          discount="30% Off" 
          image="/van-gogh-loves-u.jpg"
        />
        <CartItem 
          name="Aesthetic Sun Flower" 
          price="₦4,900" 
          oldPrice="₦7,000" 
          discount="30% Off" 
          image="/aesthetic-sunflower.jpg"
        />
        <CartItem 
          name="Tired Nerd" 
          price="₦3,150" 
          oldPrice="₦4,500" 
          discount="30% Off" 
          image="/tired-nerd.jpg"
        />
		<CartItem 
          name="Van Gogh Black" 
          price="₦3,150" 
          oldPrice="₦4,500" 
          discount="30% Off" 
          image="/van-gogh-black.jpg"
        />
		<CartItem 
          name="Aesthetic Butterfly" 
          price="₦3,150" 
          oldPrice="₦4,500" 
          discount="30% Off" 
          image="/aesthetic-butterfly.jpg"
        />
        {/* Add more CartItem components as needed */}
      </div>
    </div>
  );
};

export default DCart;
