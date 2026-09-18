import React from 'react';
import Navbar from '@/Components/Navbar'; // Import the Navbar component
import Footer from '@/Components/Footer';
import Backtotop from '@/Components/Backtotop';
import Whatsapp from '@/Components/Whatsapp';

export default function GuestLayout({ children }) {
    return (
        <div
            className="flex min-h-screen flex-col "
        >
        
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full ">
                    {children}
                </div>
            </div>
            <Whatsapp/>
            <Footer/>
        </div>
    );
}


