import React from "react";

const Hero = () => {
    return (
        <section className=" text-white"
            style={{
                background: "linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 40%, #1e6bc4 75%, #2a85e8 100%)",
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
            }}>
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <p className="mb-6">We provide a complete solution for hospitality management</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Smart Solutions for Modern Hospitality
                    </h1>
                    <p className="text-lg mb-6 text-blue-100">
                        Aegis Software is a complete hotel /restaurant/ resort management software that covers the overall transaction of your property. It is easier for you to streamline all tasks, increase revenue, control expenses, and save manpower costs.                </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                        Book a Demo
                    </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/images/aegis1.png"
                        alt="Hero"
                        className="w-full "
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
