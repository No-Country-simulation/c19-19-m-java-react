"use client"; // Esto marca el componente como un componente de cliente

import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter desde next/navigation
import { useUser} from '../context/UserContext'
import Swal from 'sweetalert2';

const CreatePlace = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [valoracion, setValoracion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [tipo, setTipo] = useState('');
  const [images, setImages] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');


  const router = useRouter(); // Usa useRouter desde next/navigation
  const { user } = useUser();
console.log(user)
  useEffect(() => {
    if (!user || (user.role !== 'Admin' && user.role !== 'SuperAdmin')) {
      setAlertMessage('No tiene permiso para crear una publicación.');
    }
  }, [user]);

  const handleImageChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages([...images, ...filesArray]);
  };

  const handleRemoveImage = (indexToRemove) => {
    const filteredImages = images.filter((_, index) => index !== indexToRemove);
    setImages(filteredImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !descripcion || !valoracion || !ubicacion || !tipo || images.length === 0) {
      setAlertMessage('Por favor complete todos los campos y seleccione al menos una imagen.');
      return;
    }
    if (!user || (user.role !== 'Admin' && user.role !== 'SuperAdmin')) {
      setAlertMessage('No tiene permiso para crear una publicación.');
      return;
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('valoracion', valoracion);
    formData.append('ubicacion', ubicacion);
    formData.append('tipo', tipo);
    images.forEach((image, index) => {
      formData.append('images', image);
    });

    try {
      const response = await fetch('http://localhost:3001/post/createPlace', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al crear el lugar');
      }

      Swal.fire({
        title: 'OK',
        text: 'Lugar creado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setNombre('');
      setDescripcion('');
      setValoracion('');
      setUbicacion('');
      setTipo('');
      setImages([]);

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error al crear el lugar',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <form className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Crear nuevo lugar</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción"
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="valoracion" className="block text-sm font-medium text-gray-700">
                Valoración
              </label>
              <input
                type="number"
                value={valoracion}
                onChange={(e) => setValoracion(e.target.value)}
                placeholder="Valoración"
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">
                Ubicación
              </label>
              <input
                type="text"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                placeholder="Ubicación"
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              >
                <option value="" disabled>Seleccione un tipo</option>
                <option value="hotel">Hotel</option>
                <option value="actividad">Actividad</option>
                <option value="restaurante">Restaurante</option>
              </select>
            </div>
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                Imágenes
              </label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
            </div>
            {images.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Imágenes seleccionadas:</p>
                <div className="flex space-x-2 mt-1">
                  {images.map((image, index) => (
                    <div key={index} className="relative w-16 h-16">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Imagen ${index}`}
                        className="object-cover w-full h-full rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center -mt-1 -mr-1 hover:bg-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Subir Lugar
            </button>
            {alertMessage && <p className="mt-2 text-red-500">{alertMessage}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePlace;

