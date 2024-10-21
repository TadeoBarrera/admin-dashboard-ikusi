import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

// Datos de ejemplo para Customer Fulfilment
const data = [
  { name: 'Jan', lastMonth: 4000, thisMonth: 2400 },
  { name: 'Feb', lastMonth: 3000, thisMonth: 1398 },
  { name: 'Mar', lastMonth: 2000, thisMonth: 9800 },
  { name: 'Apr', lastMonth: 2780, thisMonth: 3908 },
  { name: 'May', lastMonth: 1890, thisMonth: 4800 },
  { name: 'Jun', lastMonth: 2390, thisMonth: 3800 },
  { name: 'Jul', lastMonth: 3490, thisMonth: 4300 },
];

const CustomerFulfilment: React.FC = () => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F2C8ED" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F2C8ED" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis hide />
          <YAxis hide />
          <Tooltip />
          
          <Area type="monotone" dataKey="lastMonth" stroke="#F2C8ED" fill="url(#colorLastMonth)" />
          <Area type="monotone" dataKey="thisMonth" stroke="#A9DFD8" fill="url(#colorThisMonth)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-between mt-4 text-gray-400">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#A9DFD8] mr-2"></div>
          <div>
            <p className="text-white">This Month</p>
            <p className="text-gray-400">$5,506</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F2C8ED] mr-2"></div>
          <div>
            <p className="text-white">Last Month</p>
            <p className="text-gray-400">$4,087</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFulfilment;
