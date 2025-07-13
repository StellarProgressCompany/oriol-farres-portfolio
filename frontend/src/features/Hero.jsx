// src/features/Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    const containerRef = useRef(null);
    const [grid, setGrid] = useState({ cols: 0, rows: 0, cellSize: 80 });
    const [hovered, setHovered] = useState(new Set());

    useEffect(() => {
        const update = () => {
            if (!containerRef.current) return;
            const { clientWidth: w, clientHeight: h } = containerRef.current;
            const cs = 80;
            setGrid({
                cols: Math.ceil(w / cs),
                rows: Math.ceil(h / cs),
                cellSize: cs
            });
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const handleMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const col = Math.floor((e.clientX - rect.left) / grid.cellSize);
        const row = Math.floor((e.clientY - rect.top) / grid.cellSize);
        const key = `${col}-${row}`;

        setHovered((prev) => {
            if (prev.has(key)) return prev;
            const next = new Set(prev).add(key);
            setTimeout(
                () =>
                    setHovered((curr) => {
                        const copy = new Set(curr);
                        copy.delete(key);
                        return copy;
                    }),
                1000
            );
            return next;
        });
    };

    const cells = [];
    for (let r = 0; r < grid.rows; r++) {
        for (let c = 0; c < grid.cols; c++) {
            const key = `${c}-${r}`;
            cells.push(
                <div
                    key={key}
                    className={`border border-gray-700/20 ${
                        hovered.has(key) ? "highlight-cell" : ""
                    }`}
                />
            );
        }
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMove}
            className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center"
        >
            {/* social icons */}
            <div className="absolute top-6 right-6 flex gap-4 z-10">
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-sky-400 transition"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-sky-400 transition"
                >
                    <FaGithub size={28} />
                </a>
            </div>

            {/* grid overlay */}
            <div
                className="pointer-events-none absolute inset-0 -z-30 grid"
                style={{
                    gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${grid.rows}, 1fr)`
                }}
            >
                {cells}
            </div>

            {/* content */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hey, I’m&nbsp;<span className="text-sky-400">Oriol&nbsp;Farrés</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
                Informatics&nbsp;Engineering student at UPC
                <br className="hidden sm:inline" />
                Building elegant React&nbsp;+&nbsp;TailwindCSS UIs and solid Laravel
                backends.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    to="/about"
                    className="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                    More&nbsp;about&nbsp;me
                </Link>
                <a
                    href="/Oriol_Farres_CV.pdf"
                    className="rounded-lg border border-sky-400 px-6 py-3 text-base font-medium text-sky-300 transition hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                    Download&nbsp;CV
                </a>
            </div>
        </section>
    );
}
