import React, { useState, useRef, useEffect } from "react";
import { Menu, UserCircle, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link, usePage, router } from "@inertiajs/react";
import axios from "axios";



const imgurl = import.meta.env.VITE_IMAGE_PATH;


const AdminNavBar = ({ onMenuToggle }) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
       const { props } = usePage();
       const user = props?.auth?.user || null;
    // const user = usePage().props.auth.user;
    const [imageError, setImageError] = useState(false);

    const isAbsoluteUrl = (value) => {
        if (!value) return false;
        return /^https?:\/\//i.test(value);
    };

    const resolveUserImage = () => {
        if (user?.image) {
            return isAbsoluteUrl(user.image)
                ? user.image
                : `${imgurl}/${user.image}`;
        }
        if (user?.image) {
            return isAbsoluteUrl(user.image) ? user.image : `${imgurl}/${user.image}`;
        }
        return null;
    };

    // Get first letter of user's name for avatar fallback
    const getUserInitial = () => {
        if (user?.name) {
            return user.name.charAt(0).toUpperCase();
        }
        return "G"; // G for Guest
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
            await axios.post(route("logout"));
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout error:", error);
            window.location.href = "/login";
        }
    };

    // Close menu when clicking outside or pressing Escape key
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserMenuOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsUserMenuOpen(false);
    }, [window.location.pathname]);

console.log("User data in AdminNavBar:", user);
    return (
        <nav className="fixed top-0 right-0 w-full lg:w-[98%] h-16 border-b z-30 bg-white">
            <div className="h-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    {/* Left side - Menu toggle and branding */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onMenuToggle}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Optional: Add branding/logo here */}
                        <Link href="/" className="hidden lg:block">
                            <h1 className="text-lg font-semibold text-gray-800">
                              Aegishms
                            </h1>
                        </Link>
                    </div>

                   
                   {/* Right side - User menu */}
<div className="flex items-center space-x-4">
    <div className="relative" ref={userMenuRef}>
        <button
            onClick={toggleUserMenu}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-expanded={isUserMenuOpen}
            aria-haspopup="true"
        >
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                    {resolveUserImage() && !imageError ? (
                        <img
                            src={resolveUserImage()}
                            alt={`${user?.name || "User"} profile`}
                            className="w-full h-full rounded-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <span className="text-white font-medium text-sm">
                            {getUserInitial()}
                        </span>
                    )}
                </div>

                <div className="hidden sm:block text-left">
                    <span className="text-sm font-medium text-gray-700 block">
                        {user?.name || "Guest"}
                    </span>
                </div>
            </div>

            <ChevronDown
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    isUserMenuOpen ? "rotate-180" : ""
                }`}
            />
        </button>

        {/* User dropdown menu */}
        {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-40">
                <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900 truncate">
                        {user?.name || "Guest"}
                    </p>

                    <p className="text-sm text-gray-500 truncate mt-1">
                        {user?.email || ""}
                    </p>
                </div>

                <div className="border-t border-gray-200 pt-1">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
                    >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                    </button>
                </div>
            </div>
        )}
    </div>
</div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;