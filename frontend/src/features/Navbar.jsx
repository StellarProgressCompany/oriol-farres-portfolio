import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-20 transition-colors ${
                scrolled ? "bg-slate-900 shadow" : "bg-slate-900/50"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <Link to="/" className="text-white font-bold text-xl">
                    OriolF.
                </Link>
                <a
                    href="/Oriol_Farres_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-white transition"
                >
                    My Résumé
                </a>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-200 hover:text-sky-400 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-200 hover:text-sky-400 transition"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
