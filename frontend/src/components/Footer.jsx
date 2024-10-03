// comment 
import React from 'react'

const footer = () => {
  return (
    <footer className="flex justify-between items-center p-6 bg-white">
      {/* Logo y enlace */}
      <div className="flex items-center">
        <img 
          src="src\assets\Ciudad106.jpg " 
          alt="UI Unicorn" 
          className="w-6 h-6 rounded-full mr-2"
        />
        <a 
          href="https://twitter.com/ciudad106" 
          className="text-blue-600 text-sm hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          @ciudad106
        </a>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-gray-600 text-sm">
          © Hackaton 2024
        </p>
      </div>
    </footer>
  );
};

export default footer
