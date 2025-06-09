import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/header-logo.svg';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-500">
    <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/order">
        <img src={logo} alt="Gary’s Blue Diner" className="h-12 w-auto" />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link to="/order" className="text-red-600 font-semibold hover:underline">
            Our Menu
          </Link>
        </li>
        <li>
          <Link to="/payment" className="text-red-600 font-semibold hover:underline">
            Payment
          </Link>
        </li>
        <li>
          <Link to="/confirmation" className="text-red-600 font-semibold hover:underline">
            Confirmation
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;