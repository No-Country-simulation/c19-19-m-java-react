"use client";
import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import UserEditPopup from '@/components/UserEditPoput/UserEditPoput';
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

    const handleUserUpdate = (updatedUser) => {
        setUsers(users.map(u => (u.n_document === updatedUser.n_document ? updatedUser : u)));
        setFilteredUsers(filteredUsers.map(u => (u.n_document === updatedUser.n_document ? updatedUser : u)));
    };

    const handleSubscriptionToggle = async (user) => {
        try {
            const response = await fetch(`http://localhost:3001/user/${user.n_document}/toggleSubscription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    activateSubscription: !user.subscriptionActive
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedUser = await response.json();
            handleUserUpdate(updatedUser.data);
        } catch (error) {
            console.error('Error toggling subscription:', error);
        }
    };

    const isSubscriptionExpiring = (subscriptionExpiresAt) => {
        const today = new Date();
        const expirationDate = new Date(subscriptionExpiresAt);
        const diffTime = Math.abs(expirationDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30; // Consider expiring if less than 30 days
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Usuarios registrados</h1>
            
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por N° de documento"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full max-w-sm"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Documento</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suscripción</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Editar</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.n_document} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.n_document}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.first_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.last_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isSubscriptionExpiring(user.subscriptionExpiresAt) ? 'text-red-500' : 'text-gray-900'}`}>
                                    {user.subscriptionExpiresAt ? new Date(user.subscriptionExpiresAt).toLocaleDateString() : 'N/A'}
                                    {['Admin', 'SuperAdmin'].includes(user.role) && (
                                        <button
                                            onClick={() => handleSubscriptionToggle(user)}
                                            className="ml-4 p-2 bg-blue-500 text-white rounded-md"
                                        >
                                            {user.subscriptionActive ? 'Desactivar' : 'Activar'}
                                        </button>
                                    )}
                                </td>
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
                <UserEditPopup user={selectedUser} onClose={() => setSelectedUser(null)} onUpdate={handleUserUpdate} />
            )}
        </div>
    );
};

export default UsersList;



