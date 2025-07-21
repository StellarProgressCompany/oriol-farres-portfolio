// frontend/src/features/Recommendations.jsx
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const letters = [
    {
        company: "Decfa SA",
        quote:
            "Oriol’s expertise in industrial artificial‑vision systems dramatically increased our quality‑assurance throughput.",
        author: "María Gómez",
        position: "Production Lead, Decfa SA",
        url: "#",
    },
    {
        company: "AEMET",
        quote:
            "During our data‑assimilation experiment, Oriol consistently translated complex meteorological insights into rock‑solid C++ code.",
        author: "Dr. Javier Molina",
        position: "Senior Researcher, AEMET",
        url: "#",
    },
    {
        company: "Takumi Precision",
        quote:
            "By optimising our Laravel backend, Oriol cut API response times by 35 %—unlocking a noticeably smoother user experience for clients worldwide.",
        author: "Sarah O’Donnell",
        position: "CTO, Takumi Precision",
        url: "#",
    },
];

export default function Recommendations() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const [filled, setFilled] = useState(Array(letters.length).fill(false));
    const timer = useRef(null);

    useEffect(() => {
        clearInterval(timer.current);
        setProgress(0);
        const t0 = performance.now();
        timer.current = setInterval(() => {
            const pct = (performance.now() - t0) / 5000;
            if (pct >= 1) {
                clearInterval(timer.current);
                setFilled((prev) => {
                    const next = [...prev];
                    next[current] = true;
                    return current === letters.length - 1
                        ? Array(letters.length).fill(false)
                        : next;
                });
                setCurrent((i) => (i + 1) % letters.length);
            } else {
                setProgress(pct);
            }
        }, 40);
        return () => clearInterval(timer.current);
    }, [current]);

    const goTo = (i) => {
        if (i === current) return;
        clearInterval(timer.current);
        const next = Array(letters.length).fill(false);
        for (let k = 0; k < i; k++) next[k] = true;
        setFilled(next);
        setCurrent(i);
    };
    const prev = () => goTo((current + letters.length - 1) % letters.length);
    const next = () => goTo((current + 1) % letters.length);

    return (
        <>
            {/* HEADER STRIP */}
            <div className="bg-slate-900" id="recommendations">
                <div className="container mx-auto px-6 py-12 flex items-center">
                    <h2 className="text-4xl font-extrabold text-white">
                        Letters&nbsp;of&nbsp;Recommendation
                        <span className="text-indigo-400">.</span>
                    </h2>
                    <div className="flex-1 h-px bg-slate-700 ml-4" />
                </div>
            </div>

            {/* SECTION BODY */}
            <section className="bg-slate-900 text-slate-100 pb-24">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                    {/* LEFT COLUMN (vertically centered) */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold mb-4">What&nbsp;my&nbsp;managers&nbsp;say</h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-md">
                            Mentors and managers who have trusted my work share a few
                            highlights.
                        </p>
                        <div className="flex h-2 max-w-xs gap-2">
                            {letters.map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 overflow-hidden rounded-full bg-slate-700/40"
                                >
                                    <div
                                        className="h-full bg-sky-400 transition-[width] duration-100"
                                        style={{
                                            width: filled[i]
                                                ? "100%"
                                                : i === current
                                                    ? `${progress * 100}%`
                                                    : "0%",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN (vertically centered) */}
                    <div className="relative lg:w-1/2">
                        <article className="relative isolate rounded-md bg-black p-12 shadow-xl">
                            <div className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-white">
                                {letters[current].company}
                            </div>
                            <blockquote className="italic text-lg leading-relaxed text-slate-100">
                                “{letters[current].quote}”
                            </blockquote>
                            <footer className="mt-10">
                                <p className="font-semibold text-white">{letters[current].author}</p>
                                <p className="text-sm text-slate-400">{letters[current].position}</p>
                            </footer>
                        </article>
                        <button
                            onClick={prev}
                            aria-label="Previous letter"
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-slate-300 hover;text-white"
                        >
                            <FiChevronLeft size={28} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next letter"
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-slate-300 hover:text-white"
                        >
                            <FiChevronRight size={28} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
