// import AdminWrapper from '@/AdminDashboard/AdminWrapper';
// import { Link } from '@inertiajs/react';
// import {
//     ArrowUpRight,
//     BookOpen,
//     BriefcaseBusiness,
//     CalendarDays,
//     UserRound,
// } from 'lucide-react';
// import React from 'react';

// const Dashboard = () => {
//     const cards = [
//         {
//             title: 'Blog Posts',
//             description: 'Write, edit and publish articles',
//             icon: BookOpen,
//             link: '/admin-blog',
//             tint: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
//         },
//         {
//             title: 'Career',
//             description: 'Manage job openings and listings',
//             icon: BriefcaseBusiness,
//             link: '/admin-career',
//             tint: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
//         },
//         {
//             title: 'Events',
//             description: 'Schedule and organise events',
//             icon: CalendarDays,
//             link: '/admin-event',
//             tint: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
//         },
//         {
//             title: 'Users',
//             description: 'View and manage user accounts',
//             icon: UserRound,
//             link: '/admin-user',
//             tint: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
//         },
//     ];

//     return (
//         <AdminWrapper>
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Header */}
//                 <div className="mb-10">
//                     <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
//                         Home / Dashboard
//                     </p>
//                     <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
//                         Welcome back
//                     </h2>
//                     <p className="mt-1 text-sm text-gray-500">
//                         Pick a section below to start managing your content.
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//                     {cards.map((card) => {
//                         const Icon = card.icon;
//                         return (
//                             <Link
//                                 key={card.title}
//                                 href={card.link}
//                                 className="group relative block rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
//                             >
//                                 <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-gray-300 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

//                                 <div
//                                     className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${card.tint}`}
//                                 >
//                                     <Icon className="w-6 h-6" />
//                                 </div>

//                                 <h3 className="mt-6 text-lg font-semibold text-gray-900">
//                                     {card.title}
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500 leading-relaxed">
//                                     {card.description}
//                                 </p>
//                             </Link>
//                         );
//                     })}
//                 </div>
//             </div>
//         </AdminWrapper>
//     );
// };

// Dashboard.layout = (page) => page;

// export default Dashboard;


import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import { Link, usePage } from "@inertiajs/react";
import gsap from "gsap";
import NepaliDate from "nepali-date-converter";
import {
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    CalendarDays,
    LayoutDashboard,
    UserRound,
} from "lucide-react";

import React, { useEffect, useMemo, useRef, useState } from "react";

// ─── Nepali date helpers ───────────────────────────────────────────────────
const BS_MONTHS = [
    "वैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज",
    "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत्र",
];

const BS_WEEKDAYS = [
    "आइतबार", "सोमबार", "मङ्गलबार", "बुधबार",
    "बिहिबार", "शुक्रबार", "शनिबार",
];

const toNepaliDigits = (num) => {
    const map = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return String(num)
        .split("")
        .map((d) => map[d] ?? d)
        .join("");
};

const getNepaliDate = (date) => {
    try {
        const nd = new NepaliDate(date);
        const offsetMs = (5 * 60 + 45) * 60 * 1000;
        const nepalTime = new Date(date.getTime() + offsetMs);
        return `${toNepaliDigits(nd.getDate())} ${BS_MONTHS[nd.getMonth()]} ${toNepaliDigits(nd.getYear())}, ${BS_WEEKDAYS[nepalTime.getUTCDay()]}`;
    } catch {
        return "";
    }
};

const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

// ─── Cards (static, defined outside the component) ─────────────────────────
const cards = [
    {
        title: "Blog Posts",
        description: "Write, edit and publish articles",
        icon: BookOpen,
        link: "/admin-blog",
        tint: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
    },
    {
        title: "Career",
        description: "Manage job openings and listings",
        icon: BriefcaseBusiness,
        link: "/admin-career",
        tint: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    },
    {
        title: "Events",
        description: "Schedule and organise events",
        icon: CalendarDays,
        link: "/admin-event",
        tint: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    },
    {
        title: "Users",
        description: "View and manage user accounts",
        icon: UserRound,
        link: "/admin-user",
        tint: "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
    },
];

const Dashboard = () => {
    const { auth } = usePage().props;
    const firstName = auth?.user?.name?.split(" ")[0] || "Admin";

    const [now, setNow] = useState(new Date());

    // ── GSAP refs ───────────────────────────────────────────────────────
    const heroRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const greeting = useMemo(() => {
        const hour = now.getHours();
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        return "Good evening";
    }, [now]);

    const nepaliDate = useMemo(() => getNepaliDate(now), [now]);

    // ── Entrance animation: hero → cards ───────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            const validCards = cardRefs.current.filter(Boolean);

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(heroRef.current, {
                opacity: 0,
                y: -28,
                duration: 0.7,
            }).from(
                validCards,
                {
                    opacity: 0,
                    y: 22,
                    duration: 0.55,
                    stagger: 0.09,
                    clearProps: "opacity,transform", // never stuck invisible
                },
                "-=0.35"
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <AdminWrapper>
            <div className="space-y-5">
                {/* ── Hero ── */}
                <section
                    ref={heroRef}
                    className="relative overflow-hidden rounded-2xl bg-[#005c94] px-7 py-8 text-white shadow-lg shadow-green-900/20 md:px-10 md:py-9"
                >
                    {/* Decorative glow orbs */}
                    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[0.08] blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-black/[0.12] blur-2xl" />
                    <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-emerald-400/[0.10] blur-3xl" />

                    {/* Subtle dot-grid pattern */}
                    <svg
                        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="dashboardDotGrid"
                                width="22"
                                height="22"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="2" cy="2" r="1.4" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dashboardDotGrid)" />
                    </svg>

                    {/* Diagonal accent lines */}
                    <div className="pointer-events-none absolute -right-6 top-0 h-full w-[2px] rotate-[18deg] bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                    <div className="pointer-events-none absolute right-16 top-0 h-full w-[2px] rotate-[18deg] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />

                    <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-start">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                                <LayoutDashboard size={13} />
                                Admin Dashboard
                                <span className="ml-1 flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_2px_rgba(110,231,183,0.6)]" />
                            </div>
                            <h1 className="text-3xl font-semibold tracking-tight md:text-[2.1rem]">
                                {greeting}, {firstName}.
                            </h1>
                            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-green-100/80 md:text-[0.925rem]">
                                Everything's on track. Manage blog posts,
                                careers, events and users from one place.
                            </p>
                        </div>

                        {/* Clock */}
                        <div className="flex flex-col items-start gap-1.5 md:items-end">
                            <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-emerald-300">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
                                LIVE
                            </div>
                            <p className="text-4xl font-bold tabular-nums tracking-tight md:text-5xl">
                                {formatTime(now)}
                            </p>
                            <p className="text-xs text-green-100/70">
                                {formatDate(now)}
                            </p>
                            {nepaliDate && (
                                <p className="text-xs text-emerald-200/60">
                                    {nepaliDate}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── Cards ── */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <Link
                                key={card.title}
                                ref={(el) => (cardRefs.current[i] = el)}
                                href={card.link}
                                className="group relative block rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                            >
                                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700" />

                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${card.tint}`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                    {card.title}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                    {card.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </AdminWrapper>
    );
};

Dashboard.layout = (page) => page;

export default Dashboard;