import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Datos de ejemplo
const data = [
  { name: 'Jan', volume: 4000 },
  { name: 'Feb', volume: 3000 },
  { name: 'Mar', volume: 2000 },
  { name: 'Apr', volume: 2780 },
  { name: 'May', volume: 1890 },
  { name: 'Jun', volume: 2390 },
  { name: 'Jul', volume: 3490 },
];

const BarChartComponent: React.FC = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" tick={false} axisLine={false} />
          <Tooltip />
          <Legend 
            align="left"
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ color: '#ccc' }}
            formatter={() => 'Volume'}
          />
          <Bar dataKey="volume" fill="#A9DFD8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
