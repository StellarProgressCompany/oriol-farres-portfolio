// src/features/Skills.jsx
import React from "react";

const skills = [
    {
        title: "Backend & Data",
        items: [
            "C, C++",
            "Python",
            "Java",
            "R",
            "SQL (PostgreSQL, Oracle)",
            "RESTful API Design",
            "Data Structures & Algorithms",
            "UML",
        ],
    },
    {
        title: "Frontend & UI/UX",
        items: [
            "HTML5, CSS3",
            "TypeScript",
            "JavaScript",
            "React.js",
            "Vite",
            "UI / UX Principles",
            "Figma",
            "Interface Design",
        ],
    },
    {
        title: "DevOps & Tools",
        items: [
            "Git, GitHub, GitLab",
            "Linux & Shell Scripting",
            "Docker",
            "Agile (Scrum)",
            "Analytical Problem-Solving",
            "English (C1), Catalan & Spanish (Native)",
        ],
    },
];

export default function Skills() {
    return (
        <section className="relative z-10 bg-slate-900/40 py-24">
            <div className="container mx-auto px-6">
                {/* ─── SECTION TITLE (right-aligned) ─── */}
                <div className="flex items-center mb-10 justify-end">
                    <div className="flex-1 h-px bg-slate-700" />
                    <h2 className="ml-4 text-4xl font-extrabold text-white">
                        Skills.
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {skills.map(({ title, items }) => (
                        <div
                            key={title}
                            className="group relative rounded-2xl bg-slate-800/60 p-8 text-slate-300 transition hover:bg-slate-800"
                        >
                            {/* animated border */}
                            <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent card-glow" />

                            <h3 className="mb-4 text-xl font-bold text-white">
                                {title}
                            </h3>
                            <ul className="space-y-2">
                                {items.map((it) => (
                                    <li
                                        key={it}
                                        className="before:mr-2 before:text-sky-500 before:content-['▸']"
                                    >
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
