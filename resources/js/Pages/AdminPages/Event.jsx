import AddEvent from "@/AddForm/AddEvent";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

const Event = ({ events = [] }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [viewingEvent, setViewingEvent] = useState(null);

    const openAdd = () => {
        setEditingEvent(null);
        setShowForm(true);
    };

    const openEdit = (event) => {
        setViewingEvent(null);
        setEditingEvent(event);
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setEditingEvent(null);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("ourevents.destroy", id), {
                preserveScroll: true,
                onSuccess: () => setViewingEvent(null),
            });
        }
    };

    const formatDate = (date) =>
        date
            ? new Date(`${date.substring(0, 10)}T00:00:00`).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
              )
            : "-";

    // Close the view pop-up with Escape
    useEffect(() => {
        if (!viewingEvent) return;
        const onKey = (e) => e.key === "Escape" && setViewingEvent(null);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [viewingEvent]);

    return (
        <AdminWrapper>
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Events</h1>
                        <p className="text-gray-500 mt-1">
                            Manage your events and event images
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={openAdd}
                        className="bg-[#005c94] hover:bg-[#004b78] text-white px-5 py-3 rounded-lg font-medium transition"
                    >
                        + Add Event
                    </button>
                </div>

                {/* Events Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Image</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Event</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Images</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {events.length > 0 ? (
                                    events.map((event) => (
                                        <tr
                                            key={event.id}
                                            className="border-b last:border-b-0 hover:bg-gray-50 transition"
                                        >
                                            <td className="px-6 py-4">
                                                {event.images?.length > 0 ? (
                                                    <img
                                                        src={`/storage/${event.images[0]}`}
                                                        alt={event.title}
                                                        className="w-16 h-16 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                                                        No Image
                                                    </div>
                                                )}
                                            </td>

                                            <td className="px-6 py-4">
                                                <p className="font-semibold text-gray-800">{event.title}</p>
                                                <p className="text-sm text-gray-500 mt-1 max-w-md truncate">
                                                    {event.description || "No description"}
                                                </p>
                                            </td>

                                            <td className="px-6 py-4 text-gray-600">
                                                {formatDate(event.date)}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                                                    {event.images?.length || 0} images
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="flex justify-end gap-2">
                                                    {/* View */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewingEvent(event)}
                                                        className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm"
                                                    >
                                                        View
                                                    </button>

                                                    {/* Edit */}
                                                    <button
                                                        type="button"
                                                        onClick={() => openEdit(event)}
                                                        className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm"
                                                    >
                                                        Edit
                                                    </button>

                                                    {/* Delete */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(event.id)}
                                                        className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-16 text-center">
                                            <div className="text-gray-400">
                                                <p className="text-lg font-medium">No events found</p>
                                                <p className="text-sm mt-1">Start by creating your first event.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add / Edit pop-up */}
            {showForm && (
                <AddEvent
                    key={editingEvent ? editingEvent.id : "new"}
                    event={editingEvent}
                    onClose={closeForm}
                />
            )}

            {/* View pop-up */}
            {viewingEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setViewingEvent(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {viewingEvent.title}
                                </h2>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    {formatDate(viewingEvent.date)}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setViewingEvent(null)}
                                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">
                                Description
                            </h3>
                            <p className="text-gray-600 whitespace-pre-line">
                                {viewingEvent.description || "No description"}
                            </p>

                            <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">
                                Images ({viewingEvent.images?.length || 0})
                            </h3>

                            {viewingEvent.images?.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {viewingEvent.images.map((path) => (
                                        <a
                                            key={path}
                                            href={`/storage/${path}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={`/storage/${path}`}
                                                alt={viewingEvent.title}
                                                className="w-full h-36 object-cover rounded-lg border"
                                            />
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-400">No images uploaded.</p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-xl">
                            <button
                                type="button"
                                onClick={() => handleDelete(viewingEvent.id)}
                                className="px-5 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-medium"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                onClick={() => openEdit(viewingEvent)}
                                className="px-5 py-2.5 rounded-lg bg-[#005c94] hover:bg-[#004b78] text-white font-medium"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminWrapper>
    );
};

export default Event;