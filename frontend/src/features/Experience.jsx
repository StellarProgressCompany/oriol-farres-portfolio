// src/features/Experience.jsx
import React from "react";

const experience = [
    {
        company: "Decfa SA",
        role: "Artificial Vision Operator",
        period: "Jun 2021 – Sep 2022",
        location: "Granollers, Catalunya",
        description:
            "Operated industrial artificial-vision systems to ensure rigorous quality control.",
        stack: ["C++", "OpenCV", "Quality Control", "Machine Vision"],
    },
    {
        company: "Private Tutor",
        role: "Mathematics & Physics Tutor",
        period: "Sep 2021 – Present",
        location: "Granollers, Catalunya",
        description:
            "Provided tailored math and physics tutoring, helping students excel in University Access Exams.",
        stack: ["Mathematics", "Physics", "Teaching", "Exam Prep"],
    },
    {
        company: "AEMET",
        role: "Research Assistant",
        period: "Jun 2023 – Sep 2023",
        location: "Barcelona, Spain",
        bullets: [
            "Accelerated development cycles by 30 % by refactoring and documenting over 5 000 lines of the BEST prediction system’s C++ code, streamlining new forecast feature integrations.",
            "Enhanced forecast accuracy in the IFS/HARMONIE-AROME Data Assimilation experiment by collaborating with senior data analysts across Europe to integrate novel meteorological insights.",
        ],
        stack: ["C++", "Data Assimilation", "HPC", "Meteorology", "Linux"],
    },
    {
        company: "Takumi Precision Ltd.",
        role: "Full-Stack Engineer Intern",
        period: "Jun 2024 – Sep 2024",
        location: "Limerick, Ireland",
        bullets: [
            "Reduced API response times by 35 % and cut monthly server costs by $2 000 by optimising Laravel-based backend operations through advanced refactoring strategies.",
            "Enhanced network security by implementing firewall enhancements and restructuring IP distributions, significantly mitigating potential breach alerts.",
            "Boosted user satisfaction and expedited client-facing feature roll-outs by integrating Bootstrap and refining PHP templates to improve frontend usability.",
        ],
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Docker", "Security"],
    },
];

export default function Experience() {
    return (
        <section className="bg-slate-900 py-24" id="experience">
            <div className="container mx-auto px-6">
                {/* ─── SECTION TITLE (right-aligned) ─── */}
                <div className="flex items-center mb-10 justify-end">
                    <div className="flex-1 h-px bg-slate-700" />
                    <h2 className="ml-4 text-4xl font-extrabold text-white">
                        Experience<span className="text-indigo-400">.</span>
                    </h2>
                </div>

                {experience.map(
                    (
                        {
                            company,
                            role,
                            period,
                            location,
                            description,
                            bullets,
                            stack,
                        },
                        idx
                    ) => (
                        <div
                            key={company + period}
                            className={`${
                                idx !== experience.length - 1
                                    ? "mb-12 border-b border-slate-700 pb-12"
                                    : ""
                            }`}
                        >
                            {/* header row */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold text-white">
                                    {company}
                                </h3>
                                <div className="text-right">
                                    <p className="font-medium text-slate-300">
                                        {period}
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        {location}
                                    </p>
                                </div>
                            </div>

                            {/* role */}
                            <p className="mt-2 font-semibold text-sky-500">
                                {role}
                            </p>

                            {/* description or bullet list */}
                            {bullets ? (
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                                    {bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-4 text-slate-300">
                                    {description}
                                </p>
                            )}

                            {/* tech-stack tags */}
                            {stack?.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {stack.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
