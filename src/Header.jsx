import React from 'react';

const Header = () => {
return (
	<>
	<header className="flex flex-row p-10">
		<div className="logo">
			<img src="/go-to-logo-sm.png" alt="Go-To Store Logo" />
		</div>
		<div className="flex items-center bg-yellow-100 p-2 rounded-md shadow-md">
			<img src="/search-icon.png" alt="Search-Icon" />
			<input
				type="text"
				placeholder="Search Products"
				className="bg-yellow-100 outline-none flex-grow px-2"
			/>
			<button className="bg-white hover:bg-yellow-300 text-gray-600 font-bold py-1 px-3 rounded-md">
				<img src="/x.png" alt="" />
			</button>
		</div>
		<div className="flex space-x-4">
			<button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-2xl flex items-center">
				<span className='mr-1'>Wishlist</span> <img src="Heart-icon.png" alt="Heart-icon" />
			</button>
			<button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-2xl flex items-center">
				<span className='mr-1'>Your Cart</span> <img src="/Cart-icon.png" alt="Cart-icon" />
			</button>
		</div>
	</header>
	</>
	
);
};

export default Header;