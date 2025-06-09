import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { OrderProvider } from './context/OrderContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <App />
    </OrderProvider>
  </React.StrictMode>
);
// OrderProvider wraps the entire application to provide order context it comes from the context API located in src/context/OrderContext.jsx and was built this way to allow any component in the app to access the order state and functions like addItem, removeItem, and clearOrder without prop drilling. A prop is a way to pass data from a parent component to a child component in React. Prop drilling refers to the process of passing data through multiple layers of components, which can become cumbersome and hard to manage as the application grows. By using context, we can avoid this issue and make our code cleaner and more maintainable.