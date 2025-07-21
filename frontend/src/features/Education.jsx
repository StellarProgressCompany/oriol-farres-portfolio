// frontend/src/features/Education.jsx
import React, { useState } from "react";
import { FiBook, FiAward, FiChevronDown } from "react-icons/fi";

const education = [
    {
        title: "Baccalaureate’s Degree in Technological Studies",
        institution: "Escola Cervetó",
        period: "Sep 2020 – Jun 2022",
        details:
            "Completed rigorous technological curriculum with distinction, mastering key concepts in engineering fundamentals and applied sciences.",
    },
    {
        title: "American Baccalaureate – Dual Diploma",
        institution: "Academica International Studies",
        period: "Sep 2018 – Jun 2021",
        details:
            "Balanced international coursework across two countries, achieving broad academic perspectives and cultural adaptability.",
    },
    {
        title: "BSc in Computer Science (FIB)",
        institution: "Polytechnic University of Catalonia (UPC)",
        period: "Expected Graduation: Jun 2026",
        details:
            "Pursuing advanced studies in algorithms, systems design, and software engineering at one of Spain’s top technical universities.",
    },
    {
        title: "Flawless Academic Distinction",
        institution: "Scientific Mathematics, Financial Mathematics & Theoretical Physics",
        period: "Perfect 10/10 across every exam",
        details:
            "Achieved the highest possible score in all core subjects, demonstrating unwavering dedication and intellectual excellence.",
    },
    {
        title: "Accelerated Learning Mastery",
        institution: "Skipped 2nd & 3rd Grade (Gifted)",
        period: "Recognized as a gifted learner",
        details:
            "Diagnosed with exceptional cognitive ability, completed two grade levels in a single year, showcasing remarkable intellectual agility.",
    },
    {
        title: "Athletic & Academic Synergy",
        institution: "Professional Tennis & Lifelong Fitness",
        period: "Competed weekly as a juvenile/amateur; now gym enthusiast",
        details:
            "Balanced rigorous academic pursuits with weekly tennis competitions, maintaining peak performance on court and in studies, and continues to prioritize health through regular gym sessions.",
    },
];

export default function Education() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="py-24 bg-slate-900" id="education">
            <div className="container mx-auto px-6">
                {/* ─── SECTION TITLE ─── */}
                <div className="flex items-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white">
                        Education & Academical Achievements.
                    </h2>
                    <div className="flex-1 h-px bg-slate-700 ml-4" />
                </div>

                {/* 3 × 2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map(({ title, institution, period, details }, i) => (
                        <div
                            key={i}
                            className="relative bg-slate-800 rounded-xl border border-transparent overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-white"
                        >
                            <div
                                onClick={() => toggle(i)}
                                className="cursor-pointer p-8"
                            >
                                {i < 3 ? (
                                    <FiBook
                                        className="absolute top-6 left-6 text-sky-400"
                                        size={24}
                                    />
                                ) : (
                                    <FiAward
                                        className="absolute top-6 left-6 text-indigo-400"
                                        size={24}
                                    />
                                )}
                                <FiChevronDown
                                    className={`absolute top-6 right-6 text-slate-400 transition-transform duration-300 ${
                                        openIndex === i ? "rotate-180" : ""
                                    }`}
                                    size={24}
                                />

                                <h3 className="mt-8 mb-2 text-2xl font-semibold text-white leading-snug">
                                    {title}
                                </h3>
                                <p className="text-sm text-white">{institution}</p>
                                <p className="mt-1 text-xs text-gray-400">{period}</p>

                                <div
                                    className={`mt-4 text-sm text-slate-300 overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                                        openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    {details}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
