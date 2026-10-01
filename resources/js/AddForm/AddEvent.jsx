import React, { useState, useEffect, useRef } from "react";
import { router } from "@inertiajs/react";

// event = null  -> Add mode
// event = {...} -> Edit mode (also shows Delete)
const AddEvent = ({ event = null, onClose }) => {
    const isEdit = !!event;

    const [form, setForm] = useState({
        title: event?.title || "",
        date: event?.date ? event.date.substring(0, 10) : "",
        description: event?.description || "",
    });
    const [existingImages, setExistingImages] = useState(event?.images || []);
    const [newImages, setNewImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    // Keep latest previews in a ref so we only revoke them on unmount
    const previewsRef = useRef([]);
    useEffect(() => {
        previewsRef.current = previews;
    }, [previews]);
    useEffect(
        () => () => previewsRef.current.forEach((url) => URL.revokeObjectURL(url)),
        []
    );

    // Keep the latest onClose without re-running the effect on every render
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    // close on Escape + lock background scroll while the modal is open
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onCloseRef.current();
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        setNewImages((prev) => [...prev, ...files]);
        setPreviews((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))]);
        e.target.value = "";
    };

    const removeExisting = (path) =>
        setExistingImages((prev) => prev.filter((p) => p !== path));

    const removeNew = (index) => {
        URL.revokeObjectURL(previews[index]);
        setNewImages((prev) => prev.filter((_, i) => i !== index));
        setPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("date", form.date);
        formData.append("description", form.description);
        newImages.forEach((image) => formData.append("images[]", image));

        const options = {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => onClose(),
            onError: (errs) => setErrors(errs),
            onFinish: () => setProcessing(false),
        };

        if (isEdit) {
            formData.append("_method", "PUT"); // required for file uploads
            existingImages.forEach((path) =>
                formData.append("existing_images[]", path)
            );
            router.post(route("usevents.update", event.id), formData, options);
        } else {
            router.post(route("usevents.store"), formData, options);
        }
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("usevents.destroy", event.id), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        }
    };

    const error = (name) =>
        errors[name] ? (
            <p className="text-sm text-red-600 mt-1">{errors[name]}</p>
        ) : null;

    const imageError =
        errors.images ||
        Object.entries(errors).find(([k]) => k.startsWith("images."))?.[1];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {isEdit ? "Edit Event" : "Add Event"}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {isEdit ? "Update event details and images" : "Create a new event"}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl leading-none"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col min-h-0">
                    <div className="p-6 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Enter event title"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005c94] focus:border-[#005c94] outline-none"
                                    required
                                />
                                {error("title")}
                            </div>

                            {/* Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Event Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005c94] focus:border-[#005c94] outline-none"
                                    required
                                />
                                {error("date")}
                            </div>

                            {/* Images */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {isEdit ? "Add More Images" : "Event Images"}
                                </label>
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    multiple
                                    onChange={handleImages}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    You can select multiple images (jpg, png, webp, max 2MB each).
                                </p>
                                {imageError && (
                                    <p className="text-sm text-red-600 mt-1">{imageError}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Enter event description"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005c94] focus:border-[#005c94] outline-none resize-none"
                                />
                                {error("description")}
                            </div>
                        </div>

                        {/* Current images (edit only) */}
                        {isEdit && existingImages.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Current Images</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {existingImages.map((path) => (
                                        <div key={path} className="relative group">
                                            <img
                                                src={`/storage/${path}`}
                                                alt="Event"
                                                className="w-full h-28 object-cover rounded-lg border"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeExisting(path)}
                                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white text-sm opacity-0 group-hover:opacity-100 transition"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* New image previews */}
                        {previews.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                    {isEdit ? "New Images" : "Selected Images"}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {previews.map((image, index) => (
                                        <div key={image} className="relative group">
                                            <img
                                                src={image}
                                                alt={`Preview ${index + 1}`}
                                                className="w-full h-28 object-cover rounded-lg border"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeNew(index)}
                                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white text-sm opacity-0 group-hover:opacity-100 transition"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer buttons */}
                    <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50 rounded-b-xl">
                        <div>
                            {isEdit && (
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="px-5 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-medium"
                                >
                                    Delete Event
                                </button>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2.5 rounded-lg bg-[#005c94] hover:bg-[#004b78] text-white font-medium disabled:opacity-50"
                            >
                                {processing ? "Saving..." : isEdit ? "Update Event" : "Create Event"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;