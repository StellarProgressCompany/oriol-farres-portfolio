// frontend/src/features/About.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function About() {
    return (
        <>
            <Navbar />

            <div className="bg-slate-900 text-slate-100 pt-24">
                {/* ─── ABOUT ─── */}
                <div className="container mx-auto px-6 pb-20">
                    <div className="flex items-center mb-8">
                        <h1 className="text-4xl font-extrabold mr-4">About.</h1>
                        <div className="flex-1 h-px bg-slate-700" />
                    </div>
                    <div className="space-y-6 text-lg text-slate-300">
                        <p>
                            <span className="font-mono text-sky-400">
                              Computer Science Engineering student @ UPC
                            </span>{" "}
                            and{" "}
                            <span className="font-mono text-sky-400">Software Developer</span>{" "}
                            at Lanaccess. Focused on building robust, well-designed software
                            systems and always driven by curiosity.
                        </p>

                        <p>
                            A growing passion for{" "}
                            <span className="font-mono text-sky-400">Project Management</span>{" "}
                            complements my technical work—aligning technology with strategic
                            goals and enabling efficient collaboration.
                        </p>

                        <blockquote className="rounded-lg border-l-4 border-sky-600 bg-slate-800/40 p-4 italic">
                            {/* Barcelona-born, three years in Ireland—mixing an engineer’s rigor and a hands-on drive to craft meaningful, lasting solutions. */}
                        </blockquote>
                    </div>
                </div>

                {/* ─── SKILLS ─── */}
                <Skills />

                {/* ─── EDUCATION ─── */}
                <Education />

                {/* ─── EXPERIENCE ─── */}
                <Experience />
            </div>
        </>
    );
}
