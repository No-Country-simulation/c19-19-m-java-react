"use client";
import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import UserEditPopup from '@/components/UserEditPoput/UserEditPoput'; // Asegúrate de que el nombre del archivo sea correcto
import { useUser } from '@/app/context/UserContext';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useUser();
    const token = user?.token;
  
    useEffect(() => {
      const fetchUsers = async () => {
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
          setUsers(data.data);
          setFilteredUsers(data.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, [token]);
  
    useEffect(() => {
      // Filtrar usuarios según el término de búsqueda
      if (searchTerm === '') {
        setFilteredUsers(users);
      } else {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filtered = users.filter(user => 
          user.n_document.toLowerCase().includes(lowercasedFilter)
        );
        setFilteredUsers(filtered);
      }
    }, [searchTerm, users]);
  
    const handleEditClick = (user) => {
      setSelectedUser(user);
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Users List</h1>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by n_document"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full max-w-sm"
          />
        </div>
  
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">n_document</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.n_document} className="hover:bg-gray-50">
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
        </div>
  
        {selectedUser && (
          <UserEditPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    );
  };
  
  export default UsersList;

