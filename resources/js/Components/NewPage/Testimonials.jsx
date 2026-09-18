import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Santosh Neupane",
        position: "CEO, Siddhartha Hospitality",
        quote: "I can confidently say Aegis has redefined how we operate, it was not easy to fulfill our requirements, multiple outlets in different regions of Nepal. Agies well trained team, great product and their dedication results the smooth transition for new beginning. Its intuitive design and seamless integration empower our team to manage reservations, housekeeping, and reporting with unmatched precision. The advanced analytics provide actionable insights, driving smarter decisions across all Siddhartha group properties from cafes, Restaurants, banquets, budget hotels to luxury hotels. Aegis doesn't just enhance efficiency; it transforms the guest experience, enabling us to deliver exceptional hospitality every day. Proud to use this Nepalese innovation at it finest.",
        image: "/images/client2.jpg"
    },
    {
        name: "Mr. Rajendra D KIRAN",
        position: "Managing Director",
        quote: "Happy to have been using the aegis software since its inception. It's a complete reliable & user friendly system for all practical purposes. Best part is the quick assistance offered during times of need. Special requests for modifications are also handled efficiently.",
        image: "/images/client4.jpg"
    },
    {
        name: "Abhinav N Rana",
        position: "Managing Director Star Alliance Hospitality",
        quote: "Aegis Software, truly am committed to remain, product made in Nepal! I am impressed by the fact that it has been created by own Nepal based IT & hospitality experts, ensuring a flawless experience for users. It is an immense pleasure to know that Aegis is your preferred choice for smoothly operating restaurants and hotels, offering a guarantee of accuracy, confidentiality, and user-friendliness Aegis Software seems to be a genuune option for anyone in the hospitality industry looking for a reliable, user-friendly, and secure software solution. Keep up the excellent work!",
        image: "/images/client3.jpg"
    },
    {
        name: "Ms. Olga Baikina",
        position: "Head of Business Department",
        quote: "Working with Aegis PMS has been an absolute pleasure for Exely. From the outset, our mutual dedication to serving clients seamlessly has formed the bedrock of a collaborative partnership. The integration process was not just smooth; it was enjoyable, thanks to the professionalism and efficiency demonstrated by the Aegis team. Together, we've navigated complexities effortlessly, delivering solutions that exceed expectations. We're thrilled to continue this journey of innovation and client satisfaction hand in hand with Aegis PMS.",
        image: "/images/client1.png"
    },
    {
        name: "Pancham Lama ",
        position: "General Manager, Pokhara Grande",
        quote: "Aegis has been a game-changer for Pokhara Grande and of course for our hospitality business. This locally developed system exceeded our expectations with its user-friendly interface and robust features. The support team is always responsive and helpful, and we've seen a significant improvement in guest satisfaction and revenue since implementing Aegis. Highly recommended ! Wishing you all the best for the future . Keep up the great work and continue to grow. Thank you for sharing your experience, and we're glad to hear you're happy with AegisHMS!",
        image: "/images/client5.jpeg"
    },
    {
        name: "Amrit RD ",
        position: "Operational Manager, KGH Waterfront",
        quote: "Aegis Software has been a great asset for us at KGH Waterfront, Pokhara. As the Operational Manager, I've used several property management systems over the years, but Aegis has been the most impressive. It's very easy to use and extremely user-friendly, which makes daily hotel operations smooth and efficient. One of the features I value most is the reporting system. It gives managers exactly what we need to stay on top of operations and make smart, timely decisions. Everything is organized and accessible, which really helps with planning and oversight. The software feels built specifically for hotels in Nepal, and the local support team is always responsive and professional. Overall, I truly believe Aegis is the best PMS in Nepal, and I highly recommend it to any hotel or resort looking for a dependable, all-in-one solution.",
        image: "/images/amrit.png"
    },
    {
        name: "Kumar Bhatta",
        position: "Manager, Bricks Cafe",  
        quote: "As the manager of Bricks Cafe, I am extremely pleased with the effects that the software has had for my organization. It has increased efficiency in terms of order handling, billing and inventory control, as well as sales reporting. It is user-friendly, easy to operate, and has allowed my staff to be more efficient, particularly during the busy hours. Moreover, the customer support team behind this software has always been very cooperative and ready to assist whenever we needed help. “It has improved our customer services significantly and has made managing our cafe very easy.",
        image: "/images/user.png"
    },
    {
        name: "OMPRAKASH Panday",
        position: "Manager, Mourya Hotel",  
        quote: "This is the second property where I am using Aegis PMS, and I can confidently say it is one of the best software solutions for hotels and resorts. The system is very user-friendly, and new team members can understand and adapt to it quickly. The Aegis support team has been consistently helpful and responsive. I would especially like to acknowledge Mr. Bhaskar Sir, Mr. Sandeep from the support team, and Mr. Dhiraj, who provides outstanding service. He is always available whenever we call—day or night—which is a major strength of the Aegis support system. I would strongly recommend this software to all hoteliers for smooth and efficient operations. All major modules such as Front Office, Point of Sale, Sales & Marketing, Inventory, and HR are well designed and easy to use.",
        image: "/images/user.png"
    },
];

export default function TestimonialSlider() {
    return (
        <div className="w-full bg-[#f9f9ff]">
            <div className="max-w-7xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    What Our Clients Say
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 6000 }}
                    pagination={{ clickable: true }}
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white shadow-lg rounded-2xl p-8 h-[400px] flex flex-col">
                                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{t.name}</h2>
                                        <p className="text-sm text-gray-500">{t.position}</p>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <p className="text-gray-600 leading-relaxed pr-2">
                                        “{t.quote}”
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Optional: Add custom scrollbar styling */}
            <style jsx>{`
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 10px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }
            `}</style>
        </div>
    );
}