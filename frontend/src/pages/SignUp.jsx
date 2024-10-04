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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div class="flex justify-end items-center w-full mb-16">
        <svg className="mr-8 mb-" width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Notification">
        <g id="Group 3">
        <mask id="mask0_383_57" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
          <path id="Clip 2" fillRule="evenodd" clipRule="evenodd" d="M0.00012207 0H18.497V17.348H0.00012207V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_383_57)">
          <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M9.24714 1.5C5.75214 1.5 3.31614 4.238 3.31614 6.695C3.31614 8.774 2.73914 9.735 2.22914 10.583C1.82014 11.264 1.49714 11.802 1.49714 12.971C1.66414 14.857 2.90914 15.848 9.24714 15.848C15.5501 15.848 16.8341 14.813 17.0001 12.906C16.9971 11.802 16.6741 11.264 16.2651 10.583C15.7551 9.735 15.1781 8.774 15.1781 6.695C15.1781 4.238 12.7421 1.5 9.24714 1.5ZM9.24714 17.348C4.57114 17.348 0.345135 17.018 0.000135425 13.035C-0.00286458 11.387 0.500135 10.549 0.944135 9.811C1.39314 9.063 1.81614 8.358 1.81614 6.695C1.81614 3.462 4.80213 0 9.24714 0C13.6921 0 16.6781 3.462 16.6781 6.695C16.6781 8.358 17.1011 9.063 17.5501 9.811C17.9941 10.549 18.4971 11.387 18.4971 12.971C18.1481 17.018 13.9231 17.348 9.24714 17.348Z" fill="#61646B"/>
        </g>
        </g>
        <path id="Fill 4" fillRule="evenodd" clipRule="evenodd" d="M9.19839 21.5H9.19639C8.07539 21.499 7.01439 21.005 6.20939 20.108C5.93239 19.801 5.95739 19.326 6.26539 19.05C6.57339 18.772 7.04739 18.797 7.32439 19.106C7.84239 19.683 8.50739 20 9.19739 20H9.19839C9.89139 20 10.5594 19.683 11.0784 19.105C11.3564 18.798 11.8304 18.773 12.1374 19.05C12.4454 19.327 12.4704 19.802 12.1934 20.109C11.3854 21.006 10.3224 21.5 9.19839 21.5Z" fill="#61646B"/>
        </g>
        </svg>
      </div>

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
            <img src="src\assets\logo.png" alt="UI Unicorn" className="mx-auto w-20 md:w-20 mb-2"/>
            <p className="text-gray-600 text-sm md:text-base">Eco City Hub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
