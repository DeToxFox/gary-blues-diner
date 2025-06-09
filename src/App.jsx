import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import OrderPage from './pages/OrderPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light-mode-gradient dark:bg-dark-mode-gradient transition-colors duration-500">
        <Header />

        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;