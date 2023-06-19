import React, { useState } from 'react';

const Header = () => {
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [sellDropdownOpen, setSellDropdownOpen] = useState(false);
  const [rentDropdownOpen, setRentDropdownOpen] = useState(false);

  const toggleBuyDropdown = () => {
    setBuyDropdownOpen(!buyDropdownOpen);
    setSellDropdownOpen(false);
    setRentDropdownOpen(false);
  };

  const toggleSellDropdown = () => {
    setSellDropdownOpen(!sellDropdownOpen);
    setBuyDropdownOpen(false);
    setRentDropdownOpen(false);
  };

  const toggleRentDropdown = () => {
    setRentDropdownOpen(!rentDropdownOpen);
    setBuyDropdownOpen(false);
    setSellDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="ml-10 mr-10 flex items-center justify-between h-16">
        <span className="text-white font-semibold text-xl">Khasha.com</span>
        <div className="flex space-x-2">
        <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
                onClick={toggleBuyDropdown}
              >
                Buy
              </button>
            </div>
            {buyDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="buy-dropdown"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Buy 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Buy 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Buy 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
                onClick={toggleSellDropdown}
              >
                Sell
              </button>
            </div>
            {sellDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="sell-dropdown"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sell 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sell 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sell 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
                onClick={toggleRentDropdown}
              >
                Rent
              </button>
            </div>
            {rentDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="rent-dropdown"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Rent 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Rent 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Rent 3
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
          >
            Mortgage
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
          >
            Find Realtors®
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
          >
            My Home
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
          >
            News & Insight
          </a>
        </div>
        <div className="space-x-2">
          <button className="bg-transparent text-sm hover:bg-gray-500 text-gray-300 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
            Manage Rentals
          </button>
          <button className="bg-transparent text-sm hover:bg-gray-500 text-gray-300 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
            Avertise
          </button>
        </div>
        <div>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1 rounded-md text-sm font-medium"
          >
            Login
          </a>
          <button className="bg-red-500 text-sm hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
            Sign up
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
