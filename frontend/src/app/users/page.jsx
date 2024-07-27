"use client";
import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import UserEditPopup from '@/components/UserEditPoput/UserEditPoput'; // Asegúrate de que el nombre del archivo sea correcto
import { useUser } from '@/app/context/UserContext';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user } = useUser();
  const token = user ? user.token : ''; // Maneja el caso cuando `user` es null

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        console.error('Token not available');
        return;
      }

      try {
        const response = await fetch('http://localhost:3001/user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Users fetched:', data.data); // Debugging line
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]); // Agrega token en las dependencias para actualizar cuando cambie

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Users List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">n_document</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.n_document}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.n_document}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.first_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.last_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEditClick(user)} className="text-indigo-600 hover:text-indigo-900">
                  <AiOutlineEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserEditPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersList;

