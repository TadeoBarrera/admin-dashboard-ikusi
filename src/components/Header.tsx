import { FaChevronDown } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const Header = () => {
  return (
    <div className="flex justify-end items-center bg-[#171821] p-4">
      {/* Contenedor de la imagen */}
      <div className="flex items-center space-x-3">
        {/* Imagen de perfil redondeada */}
        <img
          src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" // Reemplaza con la URL de la imagen real
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* Icono de flecha hacia abajo */}
        <FaChevronDown className="text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
