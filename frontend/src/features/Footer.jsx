// frontend/src/features/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const nav = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Education", href: "#education" },
        { label: "Experience", href: "#experience" },
        { label: "Recommendation Letters", href: "#recommendations" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-700 py-10">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* left — brand */}
                <a href="#" className="text-white font-bold text-xl">
                    OriolF.
                </a>

                {/* center — section links */}
                <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                    {nav.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="hover:text-white transition"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* right — social icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition"
                    >
                        <FaGithub size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
