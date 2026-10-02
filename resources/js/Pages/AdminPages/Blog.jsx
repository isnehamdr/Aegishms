import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import AddBlog from "@/AddForm/AddBlog";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";

const imgurl = import.meta.env.VITE_IMAGE_PATH; 

const isHtml = (s) => /<\/?[a-z][\s\S]*>/i.test(s || "");


const th =
    "px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500";

const Modal = ({ title, onClose, children, size = "max-w-6xl" }) => (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
        <div className={`mx-auto my-6 w-full ${size} rounded-xl bg-gray-50 p-6 shadow-xl`}>
            <div className="mb-6 flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    Close
                </button>
            </div>
            {children}
        </div>
    </div>
);

const StatusBadge = ({ status }) =>
    status ? (
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Published
        </span>
    ) : (
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            Draft
        </span>
    );

// `categories` comes from BlogController@index (defaults + categories already used)
const Blog = ({ blogs, categories = [] }) => {
    const { flash } = usePage().props;

    // If this page was opened from some other URL/route that doesn't pass
    // `blogs`, load it through the blog route (ourblogs.index -> BlogController@index),
    // which is the one that sends the data from the database.
    useEffect(() => {
        if (blogs === undefined) {
            router.get(route("ourblogs.index"), {}, { replace: true });
        }
    }, [blogs]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    // Form modal: closed by default. Opens on "Add Blog" or "Edit".
    const [formOpen, setFormOpen] = useState(false);
    const [editing, setEditing] = useState(null); // blog being edited, or null = add
    const [viewing, setViewing] = useState(null); // blog shown in the view modal

    const list = blogs ?? [];

    const filteredBlogs = list.filter(
        (blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase()) &&
            (category === "" || blog.category === category)
    );

    const openAdd = () => {
        setEditing(null);
        setFormOpen(true);
    };

    const openEdit = (blog) => {
        setViewing(null);
        setEditing(blog);
        setFormOpen(true);
    };

    const closeForm = () => {
        setFormOpen(false);
        setEditing(null);
    };

    const handleDelete = (blog) => {
        if (!confirm(`Delete "${blog.title}"?`)) return;

        router.delete(route("ourblogs.destroy", blog.id), {
            preserveScroll: true,
            onSuccess: () => {
                if (editing?.id === blog.id) closeForm();
                if (viewing?.id === blog.id) setViewing(null);
                // If the deleted blog was the last one in the selected
                // category, that category disappears - reset the filter.
                setCategory("");
            },
        });
    };

    return (
        <>
        <AdminWrapper>
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Blogs</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage your website blogs and articles.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={openAdd}
                    className="bg-[#005c94] hover:bg-[#004b78] text-white px-5 py-3 rounded-lg font-medium transition"
                >
                    + Add Blog
                </button>
            </div>

            {flash?.success && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {flash.success}
                </div>
            )}

            {/* Blog list */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col gap-4 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        All Blogs ({list.length})
                    </h2>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black sm:w-64"
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black"
                        >
                            <option value="">All Categories</option>
                            {categories.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className={th}>Blog</th>
                                <th className={th}>Category</th>
                                <th className={th}>Author</th>
                                <th className={th}>Date</th>
                                <th className={th}>Status</th>
                                <th className={`${th} text-right`}>Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {filteredBlogs.length > 0 ? (
                                filteredBlogs.map((blog) => (
                                    <tr key={blog.id} className="transition hover:bg-gray-50">
                                        <td className="max-w-md px-5 py-4">
                                            <div className="flex items-center gap-3">
                                               {blog.image && (
    <img
        src={`${imgurl}/${blog.image}`}
        alt=""
        className="h-10 w-14 rounded object-cover"
    />
)}
                                                <p className="font-medium text-gray-900">
                                                    {blog.title}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            {blog.category && (
                                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                                    {blog.category}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {blog.author}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {String(blog.date).slice(0, 10)}
                                        </td>
                                        <td className="px-5 py-4">
                                            <StatusBadge status={blog.status} />
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setViewing(blog)}
                                                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => openEdit(blog)}
                                                    className="rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(blog)}
                                                    className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-5 py-12 text-center text-sm text-gray-500"
                                    >
                                        No blogs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add / Edit modal - only mounted while open */}
            {formOpen && (
                <Modal
                    title={editing ? `Edit "${editing.title}"` : "Add Blog"}
                    onClose={closeForm}
                >
                    <AddBlog
                        editing={editing}
                        categories={categories}
                        onDone={closeForm}
                    />
                </Modal>
            )}

            {/* View modal */}
            {viewing && (
                <Modal
                    title={viewing.title}
                    onClose={() => setViewing(null)}
                    size="max-w-3xl"
                >
                    <div className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        {viewing.image && (
    <img
        src={`${imgurl}/${viewing.image}`}
        alt=""
        className="h-64 w-full rounded-lg object-cover"
    />
)}

                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <StatusBadge status={viewing.status} />
                            {viewing.category && (
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                    {viewing.category}
                                </span>
                            )}
                            <span>By {viewing.author}</span>
                            <span>{String(viewing.date).slice(0, 10)}</span>
                            {viewing.read_time && <span>{viewing.read_time}</span>}
                        </div>

                        {viewing.excerpt && (
                            <p className="text-sm italic text-gray-500">{viewing.excerpt}</p>
                        )}

                       <div
    className={`rte-content text-sm leading-relaxed text-gray-800 ${
        isHtml(viewing.content) ? "" : "whitespace-pre-wrap"
    }`}
>
    {parse(viewing.content ?? "")}
</div>

                        {viewing.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {viewing.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
                            <button
                                type="button"
                                onClick={() => openEdit(viewing)}
                                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
        </AdminWrapper>
        </>
    );
};

export default Blog;