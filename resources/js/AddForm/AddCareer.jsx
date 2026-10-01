import React from 'react';
import { useForm } from '@inertiajs/react';

const TYPES = {
    'Full-time': 'FULL_TIME',
    'Part-time': 'PART_TIME',
    Internship: 'INTERN',
    Contract: 'CONTRACTOR',
};

const inputCls =
    'w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0EA5E9] focus:outline-none';

const Field = ({ label, error, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        {children}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

const AddCareer = ({ career = null, onClose }) => {
    const isEdit = !!career;

    const { data, setData, post, put, processing, errors } = useForm({
        title: career?.title ?? '',
        openings: career?.openings ?? 1,
        responsibilities: career?.responsibilities?.length ? career.responsibilities : [''],
        location: career?.location ?? 'Nepal',
        type: career?.type ?? 'Full-time',
        date_posted: career?.date_posted ?? new Date().toISOString().slice(0, 10),
        valid_through: career?.valid_through ?? '',
        employment_type: career?.employment_type ?? 'FULL_TIME',
        status: career?.status ?? 'active',
    });

    const setType = (type) =>
        setData((prev) => ({ ...prev, type, employment_type: TYPES[type] }));

    const addResponsibility = () =>
        setData('responsibilities', [...data.responsibilities, '']);

    const removeResponsibility = (index) =>
        setData('responsibilities', data.responsibilities.filter((_, i) => i !== index));

    const updateResponsibility = (index, value) => {
        const updated = [...data.responsibilities];
        updated[index] = value;
        setData('responsibilities', updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const options = {
            preserveScroll: true,
            onSuccess: () => onClose(),
        };

        if (isEdit) {
            put(route('ourcareer.update', career.id), options);
        } else {
            post(route('ourcareer.store'), options);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-3xl my-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {isEdit ? 'Edit Career' : 'Add Career'}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {isEdit ? 'Update this job position.' : 'Add a new job position.'}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <Field label="Job Title" error={errors.title}>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            placeholder="e.g. Sales Executive"
                            className={inputCls}
                        />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Number of Openings" error={errors.openings}>
                            <input
                                type="number"
                                min="1"
                                value={data.openings}
                                onChange={(e) => setData('openings', Number(e.target.value))}
                                className={inputCls}
                            />
                        </Field>

                        <Field label="Location" error={errors.location}>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className={inputCls}
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Job Type" error={errors.type || errors.employment_type}>
                            <select
                                value={data.type}
                                onChange={(e) => setType(e.target.value)}
                                className={inputCls}
                            >
                                {Object.keys(TYPES).map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Status" error={errors.status}>
                            <select
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                className={inputCls}
                            >
                                <option value="active">Active</option>
                                <option value="closed">Closed</option>
                            </select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Date Posted" error={errors.date_posted}>
                            <input
                                type="date"
                                value={data.date_posted}
                                onChange={(e) => setData('date_posted', e.target.value)}
                                className={inputCls}
                            />
                        </Field>

                        <Field label="Valid Through" error={errors.valid_through}>
                            <input
                                type="date"
                                value={data.valid_through}
                                min={data.date_posted}
                                onChange={(e) => setData('valid_through', e.target.value)}
                                className={inputCls}
                            />
                        </Field>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Responsibilities
                            </label>
                            <button
                                type="button"
                                onClick={addResponsibility}
                                className="text-sm bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200"
                            >
                                + Add Responsibility
                            </button>
                        </div>

                        <div className="space-y-3">
                            {data.responsibilities.map((responsibility, index) => (
                                <div key={index}>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={responsibility}
                                            onChange={(e) => updateResponsibility(index, e.target.value)}
                                            placeholder={`Responsibility ${index + 1}`}
                                            className={`flex-1 ${inputCls}`}
                                        />
                                        {data.responsibilities.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeResponsibility(index)}
                                                className="px-4 text-red-500 bg-red-50 rounded-lg hover:bg-red-100"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    {errors[`responsibilities.${index}`] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors[`responsibilities.${index}`]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {errors.responsibilities && (
                            <p className="text-red-500 text-sm mt-1">{errors.responsibilities}</p>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 bg-[#005c94] text-white rounded-lg hover:bg-[#004a78] disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : isEdit ? 'Update Career' : 'Add Career'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCareer;