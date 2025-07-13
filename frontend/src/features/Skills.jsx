// src/features/Skills.jsx
import React from "react";

export default function Skills() {
    return (
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
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
                    title: "Frontend & UI / UX",
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
            ].map(({ title, items }) => (
                <div key={title} className="rounded-xl bg-slate-900/40 p-8">
                    <h3 className="mb-6 text-lg font-bold text-sky-400">{title}</h3>
                    <ul className="space-y-2 text-slate-200">
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
    );
}
