import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/services'; // Importa el servicio de registro

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Expresiones regulares
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula y un número

  const validateForm = () => {
    if (!emailRegex.test(email)) {
      setError('El correo no es válido');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Si la validación falla, no continuar
    }

    try {
      const newUser = await signUp(email, password);
      console.log('Usuario registrado:', newUser);
      navigate('/profile', { state: { user: newUser } }); // Redirige pasando el usuario al estado
    } catch (error) {
      setError('Error al crear la cuenta. Inténtalo de nuevo más tarde.');
    }
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">¡Regístrate!</h2>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>} {/* Mostrar errores */}

        <form onSubmit={handleSubmit} noValidate> {/* Se elimina la validación HTML */}
          <div className="mb-4">
            <input
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
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

          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            ¿Ya tienes una cuenta?
            <a href="" onClick={handleLogInClick} className="text-blue-600 ml-1">Iniciar sesión</a>
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

export default SignUp;
