import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">¡Hola de nuevo!</h2>
        
       
        <form onSubmit={handleSubmit}>
          {/* Campo de correo */}
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Correo" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
         
          <div className="mb-4 relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
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
            <img src="src\assets\logo.png" alt="UI Unicorn" className="mx-auto w-20 md:w-20 mb-2"/>
            <p className="text-gray-600 text-sm md:text-base">Eco City Hub</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LogIn;
