import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import MyTable from "@/MyTable/MyTable";
import axios from "axios";
import { RefreshCw, Plus } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const ActivityLog = () => {
    const [allLog, setAllLog] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Pagination state for client-side
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // For fetching the log data
    useEffect(() => {
        const fetchLog = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/logs');
                setAllLog(response.data.data || []);
                setError(null);
            } catch (error) {
                console.error("fetching error ", error);
                setError("Failed to fetch activity logs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchLog();
    }, [reloadTrigger]);

    // Client-side pagination calculations
    const totalItems = allLog.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = allLog.slice(startIndex, endIndex);

    // Reset to first page when changing items per page
    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    // Function to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleString();
    };

    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: (row, i) => startIndex + i + 1,
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
        [startIndex]
    );

  

    return (
        <>
            <AdminWrapper>
                <div className="container mx-auto py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-4xl font-bold leading-relaxed text-stone-800 uppercase">
                                Activity Logs
                            </h1>
                            <p className="text-gray-600 mt-2">Track all user activities and system events</p>
                        </div>
                        
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-gray-500">Loading activity logs...</div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {/* No Data State */}
                    {!loading && !error && allLog.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No activity logs found.</p>
                            <p className="text-sm text-gray-400 mt-2">
                                No activity logs available at the moment.
                            </p>
                        </div>
                    )}

                    {/* Logs Table with Client-side Pagination */}
                    {!loading && !error && allLog.length > 0 && (
                        <MyTable 
                            columns={columns} 
                            data={currentData}
                            pagination={{
                                currentPage: currentPage,
                                lastPage: totalPages,
                                perPage: itemsPerPage,
                                onPageChange: setCurrentPage,
                                onPerPageChange: setItemsPerPage
                            }}
                        />
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

ActivityLog.layout = (page) => page;

export default ActivityLog;