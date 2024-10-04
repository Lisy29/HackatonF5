import React, { useState } from 'react';
import { createReport } from '../services/servicesReport';

const ReportForm = () => {
  const [tipoReporte, setTipoReporte] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = {
      tipoReporte,
      direccion,
      descripcion,
    };
    const result = await createReport(reportData);
    if (result) {
      alert('Reporte creado exitosamente');
    } else {
      alert('Error al crear el reporte');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="tipoReporte" className="block text-gray-700 font-bold mb-2">Tipo de reporte</label>
            <select
              id="tipoReporte"
              value={tipoReporte}
              onChange={(e) => setTipoReporte(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Seleccione un tipo</option>
              <option value="atasco">Atasco</option>
              <option value="accidente">Accidente</option>
              <option value="recoleccion">Recolección de residuos</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="direccion" className="block text-gray-700 font-bold mb-2">Dirección</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-700 font-bold mb-2">Descripción</label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Reportar</button>
        </form>
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

export default ReportForm;
