import React, { useEffect, useState } from "react";
import { Edit2, Trash2, Plus, Mail } from "lucide-react";
import axios from "axios";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import AddUsers from "@/AddForm/AddUsers";


const getInitials = (name) => {
    const parts = (name || "").trim().split(" ").filter(Boolean);
    if (parts.length === 0) return "?";
    const first = parts[0][0].toUpperCase();
    if (parts.length > 1) {
        return `${first}${parts[parts.length - 1][0].toUpperCase()}`;
    }
    return first;
};

const getAvatarColor = (name) => {
    let hash = 0;
    for (let i = 0; i < (name || "").length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash) % 360}, 60%, 70%)`;
};

// Shows the photo, falls back to initials if missing or broken
const Avatar = ({ user }) => {
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        setFailed(false);
    }, [user.image_url]);

    if (user.image_url && !failed) {
        return (
            <img
                src={user.image_url}
                alt={user.name}
                onError={() => setFailed(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow"
            />
        );
    }

    return (
        <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow ring-4 ring-white"
            style={{ backgroundColor: getAvatarColor(user.name) }}
        >
            {getInitials(user.name)}
        </div>
    );
};

const UserManagement = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(route("ourusers.index"));
                setAllUsers(response.data);
            } catch (error) {
                console.error("Fetching error", error);
            }
        };
        fetchUsers();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (
            !window.confirm(
                "Are you sure you want to delete this user? Deleting user means they won't be able to log in."
            )
        )
            return;

        try {
            await axios.delete(route("ourusers.destroy", { id }));
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            alert(error.response?.data?.message || "Could not delete user");
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setShowEditForm(true);
    };

    const handleUpdate = async (formData, id) => {
        formData.append("_method", "PUT");
        const response = await axios.post(
            route("ourusers.update", { id }),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        );
        setReloadTrigger((prev) => !prev);
        return response.data;
    };

    return (
        <AdminWrapper>
            <div>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between mb-6 md:mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                            User Management
                        </h1>
                        <button
                            onClick={() => setShowAddForm(true)}
                            className="mt-2 md:mt-0 py-2 md:py-3 px-4 md:px-6 bg-[#005c94] hover:bg-red-700 text-white font-medium rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center gap-2 text-sm md:text-base"
                        >
                            <Plus size={18} className="hidden md:block" />
                            <span>Add New User</span>
                        </button>
                    </div>

                    {/* Modals */}
                    {showAddForm && (
                        <AddUsers
                            editingUser={null}
                            setEditingUser={setEditingUser}
                            setShowForm={setShowAddForm}
                            setReloadTrigger={setReloadTrigger}
                        />
                    )}

                    {showEditForm && (
                        <AddUsers
                            editingUser={editingUser}
                            setEditingUser={setEditingUser}
                            setShowForm={setShowEditForm}
                            setReloadTrigger={setReloadTrigger}
                            handleUpdate={handleUpdate}
                        />
                    )}

                    {/* Users Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {allUsers.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-5 border border-white/20 transition-transform duration-200 hover:shadow-lg"
                            >
                                <div className="flex flex-col items-center text-center mb-5">
                                    <div className="relative mb-3">
                                        <Avatar user={user} />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate w-full">
                                        {user.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <p className="text-xs sm:text-sm text-gray-500 truncate max-w-[180px]">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-2 sm:gap-3">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="p-2 sm:p-3 rounded-xl bg-[#005c94] text-white shadow  transition"
                                        title="Edit User"
                                    >
                                        <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="p-2 sm:p-3 rounded-xl bg-[#005c94] text-white shadow  transition"
                                        title="Delete User"
                                    >
                                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {allUsers.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                No users found. Click "Add New User" to create one.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AdminWrapper>
    );
};

UserManagement.layout = (page) => page;

export default UserManagement;