"use client"; // Esto marca el componente como un componente de cliente

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import form from '../../Image/form.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    address: '',
    email: '',
    company: '',
    position: '',
    service_type: '',
    dni: '',
    city: '',
    country: '',
    cuit: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setUserInfo(data);
        router.push('/');
      } else {
        setError(data.message || 'Error en el registro');
      }
    } catch (error) {
      setError('Error en el registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-1 space-y-6 bg-white rounded-lg shadow-md flex">
        <div className="w-2/5 flex items-center justify-center">
          <Image src={form} alt="Imagen de Registro" className="h-full object-cover" width={500} height={800} />
        </div>
        <div className="w-3/5 pr-4 p-8">
          <div className="flex justify-center">
            <h2 className="text-2xl w-2/3 font-bold mb-4 text-center bg-[#F1D232] p-2 rounded-md">Registro de Cliente</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700">Nombre y Apellido</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">DNI</label>
                <input
                  type="text"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Dirección</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Ciudad</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">País</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Razón Social</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">CUIT</label>
                <input
                  type="text"
                  name="cuit"
                  value={formData.cuit}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Cargo</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Tipo de Servicio</label>
              <input
                type="text"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 h-8 bg-[#3B764C] text-white py-1 px-4 rounded-md hover:bg-[#336843]"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Enviar'}
              </button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
          {userInfo && <div className="text-green-500 mt-2">Registro exitoso!</div>}
        </div>
      </div>
    </div>
  );
};

export default Register;
