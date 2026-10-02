import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "@inertiajs/react";
import RichTextEditor from "../RichTextEditor";

const input =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black";
const label = "mb-2 block text-sm font-medium text-gray-700";
const card = "rounded-xl border border-gray-200 bg-white p-6 shadow-sm";

const NEW_CATEGORY = "__new__";

const Err = ({ msg }) =>
    msg ? <p className="mt-1 text-sm text-red-500">{msg}</p> : null;

const emptyForm = () => ({
    title: "",
    slug: "",
    content: "",
    image: null,
    category: "",
    author: "Aegis Team",
    author_url: "",
    date: new Date().toISOString().slice(0, 10),
    read_time: "",
    tags: [],
    status: true,
});

const imgurl = import.meta.env.VITE_IMAGE_PATH; 

const AddBlog = ({ editing = null, categories = [], onDone = () => {} }) => {
    const { data, setData, post, processing, errors, clearErrors } =
        useForm(emptyForm());

    const [formKey, setFormKey] = useState(0); // remounts the form so the file input resets
    const [tagText, setTagText] = useState("");
    const [addingCategory, setAddingCategory] = useState(false); // typing a brand-new category

    const previewUrl = useMemo(
        () => (data.image ? URL.createObjectURL(data.image) : null),
        [data.image]
    );

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const clearForm = () => {
        setTagText("");
        setAddingCategory(false);
        setData(emptyForm());
        clearErrors();
        setFormKey((k) => k + 1);
    };

    // Load the blog into the form when "Edit" is clicked, reset when it's cleared.
    useEffect(() => {
        if (editing) {
            setAddingCategory(false);
            setTagText((editing.tags ?? []).join(", "));
            clearErrors();
            setData({
                _method: "put", // multipart uploads can't use a real PUT
                title: editing.title ?? "",
                slug: editing.slug ?? "",
                content: editing.content ?? "",
                image: null,
                category: editing.category ?? "",
                author: editing.author ?? "Aegis Team",
                author_url: editing.author_url ?? "",
                date: editing.date ? String(editing.date).slice(0, 10) : "",
                read_time: editing.read_time ?? "",
                tags: editing.tags ?? [],
                status: !!editing.status,
            });
            setFormKey((k) => k + 1);
        } else {
            clearForm();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editing]);

    const handleTags = (e) => {
        setTagText(e.target.value);
        setData(
            "tags",
            e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
        );
    };

    const handleCategorySelect = (e) => {
        const value = e.target.value;

        if (value === NEW_CATEGORY) {
            setAddingCategory(true);
            setData("category", "");
        } else {
            setAddingCategory(false);
            setData("category", value);
        }
    };

    // Make sure the current category is always selectable, even if it is
    // not (yet) in the list sent by the server.
    const categoryOptions =
        data.category &&
        !categories.some((c) => c.toLowerCase() === data.category.toLowerCase())
            ? [...categories, data.category]
            : categories;

    const finish = () => {
        clearForm();
        onDone();
    };

    const submit = (e) => {
        e.preventDefault();
        const options = {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: finish,
            onError: () => {
                setTimeout(() => {
                    document
                        .getElementById("blog-form-errors")
                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 50);
            },
        };

        if (editing) {
            // Sent as POST with _method=put -> hits the PUT route ourblogs.update
            post(route("ourblogs.update", editing.id), options);
        } else {
            post(route("ourblogs.store"), options);
        }
    };

    return (
        <form key={formKey} onSubmit={submit}>
            {Object.keys(errors).length > 0 && (
                <div
                    id="blog-form-errors"
                    className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    <p className="font-semibold">The blog could not be saved:</p>
                    <ul className="mt-1 list-disc pl-5">
                        {Object.entries(errors).map(([field, msg]) => (
                            <li key={field}>{msg}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Blog Information
                        </h2>

                        <div className="mb-5">
                            <label className={label}>Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                placeholder="Enter blog title"
                                className={input}
                            />
                            <Err msg={errors.title} />
                        </div>

                        <div className="mb-5">
                            <label className={label}>Slug</label>
                            <input
                                type="text"
                                value={data.slug}
                                onChange={(e) => setData("slug", e.target.value)}
                                placeholder="blog-title-example"
                                className={input}
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Leave empty to generate automatically.
                            </p>
                            <Err msg={errors.slug} />
                        </div>

                    

                     <div>
    <label className={label}>Content</label>
    <RichTextEditor
        value={data.content}
        onChange={(html) => setData("content", html)}
    />
    <Err msg={errors.content} />
</div>
                    </div>

                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Author Information
                        </h2>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className={label}>Author</label>
                                <input
                                    type="text"
                                    value={data.author}
                                    onChange={(e) => setData("author", e.target.value)}
                                    className={input}
                                />
                                <Err msg={errors.author} />
                            </div>
                            <div>
                                <label className={label}>Author URL</label>
                                <input
                                    type="text"
                                    value={data.author_url}
                                    onChange={(e) => setData("author_url", e.target.value)}
                                    placeholder="https://example.com"
                                    className={input}
                                />
                                <Err msg={errors.author_url} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Publish
                        </h2>

                        <div className="mb-5">
                            <label className={label}>Status</label>
                            <select
                                value={data.status ? "1" : "0"}
                                onChange={(e) => setData("status", e.target.value === "1")}
                                className={input}
                            >
                                <option value="1">Published</option>
                                <option value="0">Draft</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label className={label}>Publish Date</label>
                            <input
                                type="date"
                                value={data.date}
                                onChange={(e) => setData("date", e.target.value)}
                                className={input}
                            />
                            <Err msg={errors.date} />
                        </div>

                        <div>
                            <label className={label}>Read Time</label>
                            <input
                                type="text"
                                value={data.read_time}
                                onChange={(e) => setData("read_time", e.target.value)}
                                placeholder="5 min read"
                                className={input}
                            />
                            <Err msg={errors.read_time} />
                        </div>
                    </div>

                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Category
                        </h2>

                        {!addingCategory ? (
                            <select
                                value={data.category}
                                onChange={handleCategorySelect}
                                className={input}
                            >
                                <option value="">Select Category</option>
                                {categoryOptions.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                                <option value={NEW_CATEGORY}>+ Add new category…</option>
                            </select>
                        ) : (
                            <div>
                                <input
                                    type="text"
                                    autoFocus
                                    value={data.category}
                                    onChange={(e) => setData("category", e.target.value)}
                                    placeholder="Enter new category name"
                                    maxLength={255}
                                    className={input}
                                />
                                <p className="mt-2 text-xs text-gray-400">
                                    It will be added to the category list when you save.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setAddingCategory(false);
                                        setData("category", "");
                                    }}
                                    className="mt-2 text-xs font-medium text-blue-600 hover:underline"
                                >
                                    ← Back to category list
                                </button>
                            </div>
                        )}
                        <Err msg={errors.category} />
                    </div>

                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Featured Image
                        </h2>
                       {(previewUrl || editing?.image) && (
    <img
        src={previewUrl || `${imgurl}/${editing.image}`}
        alt="Featured"
        className="mb-3 h-40 w-full rounded-lg object-cover"
    />
)}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("image", e.target.files[0] || null)}
                            className="w-full text-sm"
                        />
                        <Err msg={errors.image} />
                    </div>

                    <div className={card}>
                        <h2 className="mb-5 text-lg font-semibold text-gray-900">
                            Tags
                        </h2>
                        <input
                            type="text"
                            value={tagText}
                            onChange={handleTags}
                            placeholder="hotel, technology, security"
                            className={input}
                        />
                        <p className="mt-2 text-xs text-gray-400">
                            Separate tags with commas.
                        </p>
                        <Err msg={errors.tags} />
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={finish}
                            className="rounded-lg border border-gray-300 px-5 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex-1 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {processing
                                ? "Saving..."
                                : editing
                                ? "Save changes"
                                : "Create Blog"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddBlog;