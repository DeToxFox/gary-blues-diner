import React from 'react';

const Footer = () => (
  <footer className="py-6 bg-white dark:bg-black text-center text-sm text-gray-600 dark:text-gray-400">
    <p>&copy; {new Date().getFullYear()} Gary’s Blue Diner. All rights reserved.</p>
  </footer>
);

export default Footer;