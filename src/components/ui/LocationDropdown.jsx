import { useState, useRef, useEffect } from "react";

export default function LocationDropdown({ value, onChange, options, placeholder = "Where do you want to go?" }) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(value || "");
    const [filtered, setFiltered] = useState(options);
    const [highlighted, setHighlighted] = useState(-1);
    const buttonRef = useRef();
    const listRef = useRef();

    useEffect(() => {
        setFiltered(
            input.length === 0
                ? options
                : options.filter(opt => opt.label.toLowerCase().includes(input.toLowerCase()))
        );
        setHighlighted(0);
    }, [input, options]);

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
                setHighlighted(h => Math.min(filtered.length - 1, h + 1));
                e.preventDefault();
            } else if (e.key === "ArrowUp") {
                setHighlighted(h => Math.max(0, h - 1));
                e.preventDefault();
            } else if (e.key === "Enter" && highlighted >= 0) {
                select(filtered[highlighted]);
                e.preventDefault();
            } else if (e.key === "Escape") {
                setOpen(false);
                e.preventDefault();
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, highlighted, filtered]);

    function select(opt) {
        setInput(opt.label);
        onChange(opt.label);
        setOpen(false);
    }

    // Keep input in sync with value prop
    useEffect(() => {
        setInput(value || "");
    }, [value]);

    return (
        <div className="relative w-full">
            <div
                ref={buttonRef}
                className="w-full flex items-center bg-white/80 dark:bg-gray-800/80 rounded-[10px] p-4 shadow-md border-none focus-within:ring-2 focus-within:ring-travel-purple-light dark:focus-within:ring-travel-purple-dark transition-all duration-200 gap-4 cursor-text"
                onClick={() => setOpen(true)}
                tabIndex={0}
            >
                {/* Left Icon */}
                <span className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-travel-purple-dark dark:text-travel-purple-light text-2xl md:text-3xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9zm0-7a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </span>
                <input
                    type="text"
                    id="location-input"
                    name="location"
                    className="flex-1 bg-transparent border-none outline-none font-tinos text-lg md:text-2xl lg:text-[32px] text-travel-blue-dark dark:text-travel-blue-light placeholder-travel-purple-dark dark:placeholder-travel-purple-light"
                    placeholder={placeholder}
                    value={input}
                    onChange={e => { setInput(e.target.value); setOpen(true); }}
                    onFocus={() => setOpen(true)}
                    aria-autocomplete="list"
                    aria-controls="location-suggestions"
                    autoComplete="off"
                />
                {/* Animated Arrow */}
                <svg className={`w-6 h-6 text-travel-purple-dark dark:text-travel-purple-light transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {open && (
                <ul
                    ref={listRef}
                    id="location-suggestions"
                    className="absolute left-0 top-full mt-2 w-full bg-gradient-to-tr from-travel-blue-light/90 via-travel-purple-light/90 to-white/90 dark:from-travel-blue-dark/90 dark:via-travel-purple-dark/90 dark:to-gray-900/90 rounded-xl shadow-2xl border border-travel-blue-light dark:border-travel-purple-dark z-50 max-h-72 overflow-y-auto animate-fade-in"
                    role="listbox"
                >
                    {filtered.length === 0 && (
                        <li className="px-4 py-2 text-gray-400">No results found</li>
                    )}
                    {filtered.map((opt, idx) => {
                        const matchIdx = opt.label.toLowerCase().indexOf(input.toLowerCase());
                        return (
                            <li
                                key={opt.value}
                                role="option"
                                aria-selected={input === opt.label}
                                className={`flex items-center gap-3 px-5 py-3 cursor-pointer font-tinos text-lg md:text-2xl lg:text-[28px] transition-all duration-150 select-none
                  ${input === opt.label ? "bg-travel-blue-light/30 dark:bg-travel-purple-dark/30 text-travel-purple-dark dark:text-travel-purple-light font-bold" : "text-travel-blue-dark dark:text-travel-blue-light"}
                  ${highlighted === idx ? "bg-travel-purple-light/20 dark:bg-travel-blue-dark/20" : ""}
                `}
                                onMouseEnter={() => setHighlighted(idx)}
                                onMouseDown={() => select(opt)}
                            >
                                <span className="text-2xl md:text-3xl">{opt.icon}</span>
                                {matchIdx === -1 ? (
                                    <span>{opt.label}</span>
                                ) : (
                                    <span>
                                        {opt.label.slice(0, matchIdx)}
                                        <span className="font-bold underline">
                                            {opt.label.slice(matchIdx, matchIdx + input.length)}
                                        </span>
                                        {opt.label.slice(matchIdx + input.length)}
                                    </span>
                                )}
                                {input === opt.label && (
                                    <svg className="ml-auto w-6 h-6 text-travel-purple-dark dark:text-travel-purple-light" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
} 