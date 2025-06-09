import React from 'react';
import menuItems from '../data/menuItems.json';
import { useOrderContext } from '../context/OrderContext';

export default function OrderPage() {
  const { order, addItem } = useOrderContext();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Menu</h1>
      <ul className="space-y-2">
        {menuItems.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-gray-200 p-3 rounded">
            <span>{item.name}</span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => addItem(item.id)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}