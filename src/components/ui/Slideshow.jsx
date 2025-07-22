import React, { useState } from "react";

export default function Slideshow({ images, alt, className }) {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className={`relative ${className || ""}`}>
            <img
                src={images[index]}
                alt={alt}
                className="w-full h-[200px] object-cover transition-transform duration-300"
            />
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-900/70 rounded-full p-1 text-xl"
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-900/70 rounded-full p-1 text-xl"
                        aria-label="Next"
                    >
                        ›
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {images.map((_, i) => (
                            <span
                                key={i}
                                className={`inline-block w-2 h-2 rounded-full ${i === index ? "bg-blue-500" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
} 