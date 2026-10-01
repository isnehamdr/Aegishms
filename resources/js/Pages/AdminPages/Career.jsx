import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import AddCareer from '@/AddForm/AddCareer';
import AdminWrapper from '@/AdminDashboard/AdminWrapper';

const Item = ({ label, children }) => (
    <div>
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{label}</p>
        <p className="text-gray-900">{children || '—'}</p>
    </div>
);

const Career = ({ careers = [] }) => {
    const { flash } = usePage().props;
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [viewing, setViewing] = useState(null);

    const openAdd = () => {
        setEditing(null);
        setShowForm(true);
    };

    const openEdit = (career) => {
        setEditing(career);
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setEditing(null);
    };

    const handleDelete = (career) => {
        if (confirm(`Delete "${career.title}"?`)) {
            router.delete(route('ourcareer.destroy', career.id), { preserveScroll: true });
        }
    };

    return (
        <AdminWrapper>
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
                        <p className="text-gray-500 mt-1">Manage job positions.</p>
                    </div>
                    <button
                        onClick={openAdd}
                        className="px-5 py-3 bg-[#005c94] text-white rounded-lg hover:bg-[#004a78]"
                    >
                        + Add Career
                    </button>
                </div>

                {flash?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3">
                        {flash.success}
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3">Openings</th>
                                <th className="px-4 py-3">Valid Through</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {careers.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="px-4 py-10 text-center text-gray-400">
                                        No careers yet.
                                    </td>
                                </tr>
                            )}
                            {careers.map((c) => (
                                <tr key={c.id}>
                                    <td className="px-4 py-3 font-medium text-gray-900">{c.title}</td>
                                    <td className="px-4 py-3">{c.type}</td>
                                    <td className="px-4 py-3">{c.location}</td>
                                    <td className="px-4 py-3">{c.openings}</td>
                                    <td className="px-4 py-3">{c.valid_through ?? '—'}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${
                                                c.status === 'active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                                        <button
                                            onClick={() => setViewing(c)}
                                            className="text-gray-600 hover:underline"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => openEdit(c)}
                                            className="text-[#005c94] hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(c)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add / Edit modal */}
            {showForm && (
                <AddCareer
                    key={editing?.id ?? 'new'}
                    career={editing}
                    onClose={closeForm}
                />
            )}

            {/* View modal */}
            {viewing && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4"
                    onClick={() => setViewing(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-xl w-full max-w-2xl my-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start px-6 py-4 border-b">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{viewing.title}</h2>
                                <span
                                    className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${
                                        viewing.status === 'active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    {viewing.status}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setViewing(null)}
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <Item label="Location">{viewing.location}</Item>
                                <Item label="Openings">{viewing.openings}</Item>
                                <Item label="Job Type">{viewing.type}</Item>
                                <Item label="Employment Type">{viewing.employment_type}</Item>
                                <Item label="Date Posted">{viewing.date_posted}</Item>
                                <Item label="Valid Through">{viewing.valid_through}</Item>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                                    Responsibilities
                                </p>
                                {viewing.responsibilities?.length ? (
                                    <ul className="list-disc pl-5 space-y-1 text-gray-900">
                                        {viewing.responsibilities.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-400">No responsibilities listed.</p>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end px-6 py-4 border-t">
                            <button
                                type="button"
                                onClick={() => setViewing(null)}
                                className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </AdminWrapper>
    );
};

export default Career;