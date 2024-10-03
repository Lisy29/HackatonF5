import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getTrafficData } from '../services/services'; // Importamos el servicio para obtener los datos

const Home = () => {
  const [trafficData, setTrafficData] = useState([]); // Estado para almacenar los datos

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrafficData();
      setTrafficData(data || []); // Guardamos los datos en el estado
    };

    fetchData(); // Llamamos a la función de carga de datos
  }, []);

  return (
    <div>
      <h1 className="text-2xl bg-red-500">Home</h1>
      <p>buenas tardes</p>
      
      {/* Renderizamos el componente Card solo si los datos están disponibles */}
      {trafficData ? (
        trafficData.map((traffic, index) => (
          <Card
            key={index}
            traffic_streets={traffic.traffic_streets}
            alternate_route_available={traffic.alternate_route_available.split(',')}
          />
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Home;
