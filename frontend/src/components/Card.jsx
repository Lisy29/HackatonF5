import React from 'react';

const Card = ({ traffic_streets, alternate_route_available }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-2">{traffic_streets}</h2>
      <div>
        <p className="font-medium">Rutas alternas:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {alternate_route_available.map((route, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {route}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
