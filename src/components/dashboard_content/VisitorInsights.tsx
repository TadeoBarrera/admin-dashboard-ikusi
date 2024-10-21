import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

// Datos de ejemplo para Visitor Insights
const data = [
  { name: 'Jan', newVisitors: 200 },
  { name: 'Feb', newVisitors: 300 },
  { name: 'Mar', newVisitors: 500 },
  { name: 'Apr', newVisitors: 400 },
  { name: 'May', newVisitors: 600 },
  { name: 'Jun', newVisitors: 700 },
  { name: 'Jul', newVisitors: 800 },
  { name: 'Aug', newVisitors: 600 },
  { name: 'Sep', newVisitors: 500 },
  { name: 'Oct', newVisitors: 400 },
  { name: 'Nov', newVisitors: 300 },
  { name: 'Dec', newVisitors: 200 },
];

const VisitorInsights: React.FC = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorNewVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend 
            verticalAlign="top" 
            align="right" 
            iconType="circle" 
            wrapperStyle={{ color: '#A9DFD8' }} 
            payload={[{ value: 'New Visitors', type: 'circle', id: 'newVisitors', color: '#A9DFD8' }]}
          />
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <Area 
            type="monotone" 
            dataKey="newVisitors" 
            stroke="#A9DFD8" 
            fillOpacity={1} 
            fill="url(#colorNewVisitors)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorInsights;
