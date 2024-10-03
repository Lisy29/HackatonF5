import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ya tengo mi componente de LogIn ahora voy hacer mi SignUp

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate('/login');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className='w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg'>
        
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">¡Registrate!</h2>
          <form onSubmit={handleSubmit}>
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

           <div className='mb-4 relative'>
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

          <div className='mb-4 relative'>
            <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
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

          <div className='mt-6 text-center'>
            <p className='text-gray-600 text-sm md:text-base'>
               Ya tienes una cuenta?
               <a href="" onClick={handleLogInClick} className='text-blue-600 ml-1'>Iniciar sesión</a>
            </p>
          </div>

          <div className="mt-8 flex justify-center items-center">
          <div className="text-center">
            <img src="src\assets\Ciudad106.jpg" alt="UI Unicorn" className="mx-auto w-20 md:w-20 mb-2"/>
            <p className="text-gray-600 text-sm md:text-base">Ciudad 106</p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default SignUp
