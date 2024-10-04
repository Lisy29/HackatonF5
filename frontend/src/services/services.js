// services.js
const API_URL = 'http://localhost:3000/trafficData'; // Cambia esto por la URL de tu API
const API_URL_USER = 'http://localhost:3000/logIn'; // Cambia esto por la URL de tu API
// services.js


export const getTrafficData = async () => {
  const response = await fetch(API_URL); // Asegúrate de que esta URL sea correcta
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data; // Asegúrate de que esto devuelva un array
};

export const login = async (email, password) => {
  try {
    // Realiza un GET para obtener todos los usuarios
    const response = await fetch(`${API_URL_USER}?email=${email}`);

    if (!response.ok) {
      throw new Error('Error en la consulta de usuarios');
    }

    const users = await response.json();

    // Verifica si existe un usuario con el email y contraseña dados
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Si el usuario existe, devuélvelo
    return user;
  } catch (error) {
    console.error('Error en login:', error);
    throw error; // Propaga el error al componente
  }
};

// Función para registrar un nuevo usuario
export const signUp = async (email, password) => {
  try {
    const response = await fetch(API_URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Error al crear usuario');
    }

    const newUser = await response.json();
    return newUser; // Devuelve el usuario creado
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
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

