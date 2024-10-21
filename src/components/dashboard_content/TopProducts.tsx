import React from 'react';

// Datos de ejemplo, ordenados de forma descendente
const products = [
  { id: 1, name: 'Home Decore Range', popularity: 46, sales: '46%', color: '#FCB859' },
  { id: 2, name: 'Apple Smartwatch', popularity: 29, sales: '29%', color: '#F2C8ED' },
  { id: 3, name: 'Bathroom Essentials', popularity: 19, sales: '19%', color: '#28AEF3' },
  { id: 4, name: 'Disney Princess Dress', popularity: 17, sales: '17%', color: '#A9DFD8' },
];

const TopProducts: React.FC = () => {
  return (
    <div className="h-full w-full">
      <table className="w-full text-left text-gray-400">
        <thead>
          <tr>
            <th className="pb-2">#</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Popularity</th>
            <th className="pb-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-t border-gray-700">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{product.name}</td>
              <td className="py-2">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${product.popularity}%`, backgroundColor: product.color }}
                  ></div>
                </div>
              </td>
              <td className="py-2">{product.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
