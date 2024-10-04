import React, { useEffect, useState } from 'react';
import { getTrafficData } from '../services/services'; 
import Card from '../components/Card'; 
import banner from '../assets/ecoCityHub.png';

const Home = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrafficData();
        console.log("Datos de tráfico recibidos:", data);
        setTrafficData(data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <img 
          src={banner} 
          alt="Banner de Múevete Fácil" 
          className="w-full h-auto object-cover sm:h-60 md:h-72 lg:h-80" 
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Datos de Tráfico</h1>
      {trafficData.length > 0 ? (
        trafficData.map((item, index) => (
          <Card
            key={item.id || index}  // Usar item.id si está disponible, o el índice como respaldo
            traffic_streets={item.traffic_streets}
            alternate_route_available={item.alternate_route_available}
          />
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Home;
