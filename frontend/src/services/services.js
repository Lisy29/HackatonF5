// services.js
const API_URL = 'http://localhost:8080/trafficData.csv'; // Cambia esto por la URL de tu API

export const getTrafficData = async () => {
  try {
    const response = await fetch(API_URL); // Petición directa al archivo CSV
    if (!response.ok) throw new Error('Error fetching traffic data');
    const csvText = await response.text();

    // Parseamos el CSV a JSON
    const parsedData = Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
    });

    return parsedData.data; // Devolvemos los datos parseados
  } catch (error) {
    console.error(error);
  }
};


export const postTrafficData = async (data) => {
  try {
    const response = await fetch(`${API_URL}/traffic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error posting traffic data');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Puedes agregar aquí más métodos para update y delete si lo necesitas
