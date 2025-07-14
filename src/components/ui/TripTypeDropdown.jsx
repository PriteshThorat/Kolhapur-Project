import { useState, useRef, useEffect } from "react";

export default function TripTypeDropdown({ value, onChange, options, placeholder = "Trip type" }) {
    const [open, setOpen] = useState(false);
    const [highlighted, setHighlighted] = useState(-1);
    const buttonRef = useRef();
    const listRef = useRef();

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e) {
            if (!buttonRef.current?.contains(e.target) && !listRef.current?.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    // Keyboard navigation
    useEffect(() => {
        if (!open) return;
        function handleKey(e) {
            if (e.key === "ArrowDown") {
                setHighlighted(h => Math.min(options.length - 1, h + 1));
                e.preventDefault();
            } else if (e.key === "ArrowUp") {
                setHighlighted(h => Math.max(0, h - 1));
                e.preventDefault();
            } else if (e.key === "Enter" && highlighted >= 0) {
                onChange(options[highlighted].value);
                setOpen(false);
                e.preventDefault();
            } else if (e.key === "Escape") {
                setOpen(false);
                e.preventDefault();
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, highlighted, options, onChange]);

    // Set highlighted to selected or first on open
    useEffect(() => {
        if (open) {
            const idx = options.findIndex(opt => opt.value === value);
            setHighlighted(idx >= 0 ? idx : 0);
        }
    }, [open, value, options]);

    const selected = options.find(opt => opt.value === value);

    return (
        <div className="relative w-full">
            <button
                ref={buttonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                className="w-full flex items-center bg-white/80 dark:bg-gray-800/80 rounded-[10px] p-4 shadow-md border-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark transition-all duration-200 cursor-pointer gap-4"
                onClick={() => setOpen(o => !o)}
                tabIndex={0}
            >
                {/* Left Icon */}
                <span className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-travel-purple-dark dark:text-travel-purple-light text-2xl md:text-3xl">
                    {selected?.icon || <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                </span>
                <span className={`flex-1 text-left font-tinos text-lg md:text-2xl lg:text-[32px] ${selected ? "text-travel-purple-dark dark:text-travel-purple-light" : "text-gray-400 dark:text-gray-500"}`}>
                    {selected ? selected.label : placeholder}
                </span>
                {/* Animated Arrow */}
                <svg className={`w-6 h-6 text-travel-purple-dark dark:text-travel-purple-light transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <ul
                    ref={listRef}
                    className="absolute left-0 top-full mt-2 w-full bg-gradient-to-tr from-travel-blue-light/90 via-travel-purple-light/90 to-white/90 dark:from-travel-blue-dark/90 dark:via-travel-purple-dark/90 dark:to-gray-900/90 rounded-xl shadow-2xl border border-travel-blue-light dark:border-travel-purple-dark z-50 max-h-72 overflow-y-auto animate-fade-in"
                    role="listbox"
                >
                    {options.map((opt, idx) => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={value === opt.value}
                            className={`flex items-center gap-3 px-5 py-3 cursor-pointer font-tinos text-lg md:text-2xl lg:text-[28px] transition-all duration-150 select-none
                ${value === opt.value ? "bg-travel-blue-light/30 dark:bg-travel-purple-dark/30 text-travel-purple-dark dark:text-travel-purple-light font-bold" : "text-travel-blue-dark dark:text-travel-blue-light"}
                ${highlighted === idx ? "bg-travel-purple-light/20 dark:bg-travel-blue-dark/20" : ""}
              `}
                            onMouseEnter={() => setHighlighted(idx)}
                            onMouseDown={() => { onChange(opt.value); setOpen(false); }}
                        >
                            <span className="text-2xl md:text-3xl">{opt.icon}</span>
                            <span>{opt.label}</span>
                            {value === opt.value && (
                                <svg className="ml-auto w-6 h-6 text-travel-purple-dark dark:text-travel-purple-light" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
} 