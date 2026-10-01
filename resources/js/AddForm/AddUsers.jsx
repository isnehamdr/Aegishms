import axios from "axios";
import { X, Eye, EyeOff, Camera, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const inputCls =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500";

const emptyForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: null,
};

const getErrorMessage = (error) => {
    const errors = error.response?.data?.errors;
    if (errors) return Object.values(errors).flat().join("\n");
    return error.response?.data?.message || "Error saving user data";
};

const PasswordInput = ({ label, name, value, onChange, disabled, placeholder }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} *
            </label>
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${inputCls} pr-10`}
                    disabled={disabled}
                    autoComplete="new-password"
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    disabled={disabled}
                >
                    {show ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                    )}
                </button>
            </div>
        </div>
    );
};

const AddUsers = ({
    editingUser,
    setEditingUser,
    setShowForm,
    setReloadTrigger,
    handleUpdate,
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState(null); // full URL or blob URL
    const [formData, setFormData] = useState(emptyForm);

    // Fill form when editing
    useEffect(() => {
        if (editingUser) {
            setFormData({
                ...emptyForm,
                name: editingUser.name || "",
                email: editingUser.email || "",
            });
            setImagePreview(editingUser.image_url || null);
        } else {
            setFormData(emptyForm);
            setImagePreview(null);
        }
    }, [editingUser]);

    // Free blob URLs when they are replaced or the modal unmounts
    useEffect(() => {
        return () => {
            if (imagePreview && imagePreview.startsWith("blob:")) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    const closeForm = () => {
        setShowForm(false);
        setEditingUser(null);
    };

    const handleCreate = async (payload) => {
        await axios.post(route("ourusers.store"), payload, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setReloadTrigger((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            if (!file) return;
            setFormData((prev) => ({ ...prev, [name]: file }));
            setImagePreview(URL.createObjectURL(file));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) return alert("Name is required");
        if (!formData.email.trim()) return alert("Email is required");

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return alert("Please enter a valid email address");
        }

        if (!editingUser) {
            if (!formData.password) return alert("Password is required");
            if (formData.password.length < 6) {
                return alert("Password must be at least 6 characters");
            }
            if (formData.password !== formData.password_confirmation) {
                return alert("Passwords do not match");
            }
        }

        const payload = new FormData();
        payload.append("name", formData.name);

        if (!editingUser) {
            // Email can't be changed on edit, so only send it on create
            payload.append("email", formData.email);
            payload.append("password", formData.password);
            payload.append("password_confirmation", formData.password_confirmation);
        }

        if (formData.image) payload.append("image", formData.image);

        try {
            setSubmitting(true);

            if (editingUser) {
                await handleUpdate(payload, editingUser.id);
            } else {
                await handleCreate(payload);
            }

            closeForm();
        } catch (error) {
            alert(getErrorMessage(error));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="relative px-6 py-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
                <div className="flex justify-between items-center mb-6 pb-4 border-b">
                    <h2 className="text-2xl font-bold">
                        {editingUser ? "Edit User" : "Add New User"}
                    </h2>
                    <button
                        type="button"
                        onClick={closeForm}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Profile image */}
                    <div className="flex flex-col items-center mb-4">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User className="w-12 h-12 text-gray-400" />
                                )}
                            </div>
                            <label
                                htmlFor="image-upload"
                                className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer transition-colors shadow-lg"
                            >
                                <Camera className="w-5 h-5" />
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                                disabled={submitting}
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            Click the camera icon to upload a profile picture
                        </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={inputCls}
                                disabled={submitting}
                                placeholder="Enter full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={!!editingUser || submitting}
                                className={`${inputCls} disabled:bg-gray-100 disabled:cursor-not-allowed`}
                                placeholder="Enter email address"
                            />
                            {editingUser && (
                                <p className="text-xs text-gray-500 mt-1">
                                    Email cannot be changed
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Passwords (new users only) */}
                    {!editingUser && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <PasswordInput
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={submitting}
                                placeholder="Enter password"
                            />
                            <PasswordInput
                                label="Confirm Password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                disabled={submitting}
                                placeholder="Confirm password"
                            />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={closeForm}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                            disabled={submitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-6 py-2 bg-[#dc2626] hover:bg-red-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting
                                ? editingUser
                                    ? "Updating..."
                                    : "Creating..."
                                : editingUser
                                ? "Update User"
                                : "Create User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;