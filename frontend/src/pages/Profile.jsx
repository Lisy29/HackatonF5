import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
          <h2 className="text-xl font-bold text-gray-900">{user?.email || 'Usuario'}</h2>
        </div>
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Editar perfil
        </button>
        <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-red-700 transition-colors">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;