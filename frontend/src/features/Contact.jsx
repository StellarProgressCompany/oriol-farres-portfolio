// frontend/src/features/Contact.jsx
import React, { useState, useRef } from "react";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

/**
 * Terminal‑style contact form (frontend‑only).
 */
export default function Contact() {
    const prompts = [
        { key: "email", label: "To start, could you give us your email?" },
        { key: "name", label: "Awesome! And what’s your name?" },
        { key: "description", label: "Perfect, and how can we help you?" },
    ];

    const [step, setStep] = useState(0);
    const [data, setData] = useState({ email: "", name: "", description: "" });
    const inputRef = useRef(null);

    const handleSubmit = (value) => {
        if (!value) return;
        const key = prompts[step].key;
        setData((prev) => ({ ...prev, [key]: value }));
        setStep((s) => s + 1);
        setTimeout(() => inputRef.current?.focus(), 10);
    };

    const restart = () => {
        setData({ email: "", name: "", description: "" });
        setStep(0);
        setTimeout(() => inputRef.current?.focus(), 10);
    };

    const Question = ({ children }) => (
        <p className="mb-2 text-slate-200">
            <span className="text-sky-400">➜ ~</span>&nbsp;{children}
        </p>
    );

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                {/* ─── SECTION TITLE ─── */}
                <div className="flex items-center mb-6 justify-end">
                    <div className="flex-1 h-px bg-slate-700" />
                    <h2 className="ml-4 text-4xl font-extrabold text-white">Contact.</h2>
                </div>

                {/* ─── TERMINAL WINDOW ─── */}
                <div className="rounded-xl border border-slate-700/70 bg-[#0f172a] shadow-2xl overflow-hidden">
                    {/* title‑bar */}
                    <div className="flex items-center gap-2 bg-[#334155] px-3 py-2 text-xs font-semibold text-slate-300">
                        <FaCircle className="text-red-500" />
                        <FaCircle className="text-yellow-400" />
                        <FaCircle className="text-green-500" />
                        <span className="ml-3 select-none">Let's connect!</span>
                    </div>

                    {/* body */}
                    <div className="h-[420px] overflow-y-auto px-6 py-8 font-mono text-[0.875rem] leading-relaxed scrollbar-thin scrollbar-thumb-slate-600 scrollbar-thumb-rounded-md">
                        <p className="mb-6 text-slate-100">
                            Hey there! We&rsquo;re excited to link&nbsp;
                            <span role="img" aria-label="paperclip">
                📎
              </span>
                        </p>
                        <hr className="mb-6 border-slate-600" />

                        {/* ─── QUESTIONS & ANSWERS ─── */}
                        {prompts.map(({ key, label }, i) => {
                            if (step < i) return null; // hide future questions

                            return (
                                <div key={key} className="mb-6">
                                    <Question>{label}</Question>

                                    {step > i ? (
                                        <p className="flex items-center gap-2 text-emerald-400">
                                            <FaCheckCircle /> {data[key]}
                                        </p>
                                    ) : (
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                handleSubmit(e.target.elements[0].value.trim());
                                            }}
                                        >
                                            <Question>
                                                <input
                                                    ref={inputRef}
                                                    name="answer"
                                                    autoFocus
                                                    required
                                                    className="w-full bg-transparent outline-none placeholder-slate-500"
                                                    placeholder={`Enter ${key}:`}
                                                />
                                            </Question>
                                        </form>
                                    )}
                                </div>
                            );
                        })}

                        {/* ─── REVIEW ─── */}
                        {step === prompts.length && (
                            <>
                                <p className="mb-4 text-slate-100">
                                    Beautiful! Here&rsquo;s what we&rsquo;ve got:
                                </p>
                                <div className="mb-6 text-slate-300">
                                    <p>
                                        <span className="inline-block w-28 text-sky-400">email:</span>
                                        {data.email}
                                    </p>
                                    <p>
                                        <span className="inline-block w-28 text-sky-400">name:</span>
                                        {data.name}
                                    </p>
                                    <p>
                                        <span className="inline-block w-28 text-sky-400">description:</span>
                                        {data.description}
                                    </p>
                                </div>
                                <p className="mb-4">Look good?</p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={restart}
                                        className="rounded bg-slate-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-500"
                                    >
                                        Restart
                                    </button>
                                    <button
                                        onClick={() => alert("📨  Message queued – coming soon!")}
                                        className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
                                    >
                                        Send it!
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
