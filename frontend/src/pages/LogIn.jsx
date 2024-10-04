import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/services'; 

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones con expresiones regulares
    if (!emailRegex.test(email)) {
      setError('El formato del correo es inválido.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.');
      return;
    }

    try {
      // Usar el servicio login para autenticar
      const userData = await login(email, password);
      console.log('Usuario autenticado:', userData);

      // Redirigir a la página de perfil si el login es exitoso
      navigate('/profile', { state: { user: userData } });
    } catch (error) {
      setError('Correo o contraseña incorrectos.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">¡Hola de nuevo!</h2>
        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Campo de correo */}
          <div className="mb-4">
            <input
              type="text" // Cambiado a texto simple
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600 text-sm md:text-base">Recuérdame</label>
            </div>
            <a href="#" className="text-blue-600 text-sm md:text-base">¿Olvidaste tu contraseña?</a>
          </div>

          {/* Botón de iniciar sesión */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm md:text-base">
            ¿No tienes una cuenta? 
            <a href="#" onClick={handleSignUpClick} className="text-blue-600 ml-1">Crear una cuenta</a>
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center">
          <div className="text-center">
            <img src="src/assets/logo.png" alt="UI Unicorn" className="mx-auto w-20 md:w-20 mb-2" />
            <p className="text-gray-600 text-sm md:text-base">Eco-city-hub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
