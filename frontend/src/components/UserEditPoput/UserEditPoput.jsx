"use client";
import { useState } from 'react';
import { useUser } from '@/app/context/UserContext';

const UserEditPopup = ({ user, onClose }) => {
  const [formData, setFormData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user: currentUser } = useUser(); // Asegúrate de que esto sea correcto
  const token = currentUser ? currentUser.token : '';

  const handleInputChange = (e) => {
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
      const response = await fetch(`http://localhost:3001/user/${formData.n_document}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
      }

      alert('Usuario actualizado con éxito');
      onClose();
    } catch (error) {
      setError('Error al actualizar el usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup">
      <h2>Editar Usuario</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>n_document:</label>
          <input type="text" name="n_document" value={formData.n_document} readOnly />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleInputChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="SuperAdmin">SuperAdmin</option>
          </select>
        </div>
        <div>
          <label>Subscription Expires At:</label>
          <input type="date" name="subscriptionExpiresAt" value={formData.subscriptionExpiresAt} onChange={handleInputChange} />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Actualizando...' : 'Actualizar Usuario'}
        </button>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </form>
    </div>
  );
};

export default UserEditPopup;


