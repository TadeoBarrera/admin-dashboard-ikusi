import React from 'react';

// Definición de la interfaz para los props
interface ContentContainerProps {
  title: string;
  subtitle?: string;  // El subtítulo es opcional
  sectionNumber: string | number; // Puede ser string o número
  children: React.ReactNode; // Para pasar contenido dentro del contenedor
}

const ContentContainer: React.FC<ContentContainerProps> = ({ title, subtitle, sectionNumber, children }) => {
  return (
    <div className="bg-[#21222D] p-6 rounded-lg shadow-md w-full flex-grow">
      <div className="flex justify-between items-start mb-4">
        {/* Contenido del título y subtítulo alineado a la izquierda */}
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
        
        {/* Número de sección alineado a la derecha */}
        <div className="text-gray-400 text-lg">{sectionNumber}</div>
      </div>

      {/* Contenido dinámico */}
      {children}
    </div>
  );
};

export default ContentContainer;
