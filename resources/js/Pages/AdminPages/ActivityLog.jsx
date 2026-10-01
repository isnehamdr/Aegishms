import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import MyTable from "@/MyTable/MyTable";
import axios from "axios";
import { RefreshCw } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
};

const ActivityLog = () => {
    const [logs, setLogs] = useState([]);
    const [meta, setMeta] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    });
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchLog = async () => {
            try {
                setLoading(true);
                const response = await axios.get(route("logs.index"), {
                    params: { page, per_page: perPage },
                    headers: { Accept: "application/json" },
                });

                if (ignore) return;

                // Guard: session expired / redirect returns HTML, not JSON
                if (!response.data?.meta) {
                    throw new Error("Unexpected response from server");
                }

                setLogs(response.data.data ?? []);
                setMeta(response.data.meta);
                setError(null);
            } catch (err) {
                if (ignore) return;
                console.error("fetching error", err);
                setError("Failed to fetch activity logs. Please try again.");
            } finally {
                if (!ignore) setLoading(false);
            }
        };

        fetchLog();

        return () => {
            ignore = true;
        };
    }, [page, perPage, reloadTrigger]);

    // If we're on a page that no longer exists, jump to the last valid page
    useEffect(() => {
        if (meta.last_page > 0 && page > meta.last_page) {
            setPage(meta.last_page);
        }
    }, [meta.last_page, page]);

    const handlePerPageChange = (value) => {
        setPerPage(Number(value));
        setPage(1);
    };

    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: (row, i) =>
                    (meta.current_page - 1) * meta.per_page + i + 1,
                id: "rowIndex",
                width: 60,
            },
            { Header: "User Name", accessor: "name" },
            { Header: "IP Address", accessor: "ip_address" },
            { Header: "Activity", accessor: "title" },
            {
                Header: "Date & Time",
                accessor: "created_at",
                Cell: ({ value }) => formatDate(value),
            },
        ],
        [meta.current_page, meta.per_page]
    );

    return (
        <AdminWrapper>
            <div className="container mx-auto py-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold leading-relaxed text-stone-800 uppercase">
                            Activity Logs
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Track all user activities and system events
                        </p>
                    </div>

                    <button
                        onClick={() => setReloadTrigger((prev) => !prev)}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                        <RefreshCw
                            size={16}
                            className={loading ? "animate-spin" : ""}
                        />
                        Refresh
                    </button>
                </div>

                {/* First load */}
                {loading && logs.length === 0 && !error && (
                    <div className="flex justify-center items-center py-8">
                        <div className="text-gray-500">Loading activity logs...</div>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && meta.total === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No activity logs found.</p>
                        <p className="text-sm text-gray-400 mt-2">
                            No activity logs available at the moment.
                        </p>
                    </div>
                )}

                {/* Table (stays visible while changing pages) */}
                {logs.length > 0 && (
                    <div className={loading ? "opacity-60 pointer-events-none" : ""}>
                        <MyTable
                            columns={columns}
                            data={logs}
                            pagination={{
                                currentPage: meta.current_page,
                                lastPage: meta.last_page,
                                perPage: meta.per_page,
                                onPageChange: (p) => setPage(Number(p)),
                                onPerPageChange: handlePerPageChange,
                            }}
                        />
                    </div>
                )}
            </div>
        </AdminWrapper>
    );
};

ActivityLog.layout = (page) => page;

export default ActivityLog;