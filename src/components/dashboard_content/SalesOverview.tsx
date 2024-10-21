import React from 'react';
import { FaShoppingCart, FaBatteryFull, FaShoppingBag, FaUserPlus } from 'react-icons/fa';

const SalesOverview: React.FC = () => {
  const data = [
    {
      id: 1,
      icon: <FaShoppingCart className="text-yellow-500 w-6 h-6" />,
      amount: "$5k",
      label: "Total Sales",
      change: "+10% from yesterday",
      changeColor: "text-yellow-500",
    },
    {
      id: 2,
      icon: <FaBatteryFull className="text-gray-400 w-6 h-6" />,
      amount: "500",
      label: "Total Order",
      change: "+8% from yesterday",
      changeColor: "text-green-500",
    },
    {
      id: 3,
      icon: <FaShoppingBag className="text-pink-400 w-6 h-6" />,
      amount: "9",
      label: "Product Sold",
      change: "+2% from yesterday",
      changeColor: "text-pink-400",
    },
    {
      id: 4,
      icon: <FaUserPlus className="text-blue-500 w-6 h-6" />,
      amount: "12",
      label: "New Customer",
      change: "+3% from yesterday",
      changeColor: "text-blue-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#171821] p-4 rounded-lg flex flex-col justify-start items-start"
        >
          {/* Icono en la parte superior */}
          <div className="mb-2">{item.icon}</div>

          {/* Cantidad y etiqueta, con texto en una sola línea */}
          <p className="text-white text-lg font-semibold whitespace-nowrap">{item.amount}</p>
          <p className="text-gray-400 whitespace-nowrap">{item.label}</p>
          
          {/* Cambio porcentual con el color correspondiente */}
          <p className={`${item.changeColor} text-xs whitespace-nowrap`}>{item.change}</p>
        </div>
      ))}
    </div>
  );
};

export default SalesOverview;
