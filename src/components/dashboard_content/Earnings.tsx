import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Datos del gráfico semicircular
const data = [
  { name: 'Completed', value: 80 },  // Porcentaje completado
  { name: 'Remaining', value: 20 },  // Lo que falta
];

const COLORS = ['#A9DFD8', '#444B5B'];  // Usamos el color A9DFD8

const Earnings: React.FC = () => {
  return (
    <div className="w-full">
      <p className="text-gray-400">Total Expense</p>
      <p className="text-3xl font-bold text-[#A9DFD8]">$6078.76</p>
      <p className="text-gray-400 mb-6">Profit is 48% More than last Month</p> {/* Aumentamos el margen inferior */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32"> {/* Aumentamos el tamaño del gráfico */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                dataKey="value"
                innerRadius="70%"
                outerRadius="100%"
                paddingAngle={5}
              >
                {data.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center text-[#A9DFD8] text-2xl font-bold">
            80%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
