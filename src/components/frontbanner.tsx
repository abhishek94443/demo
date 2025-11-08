import React, { useEffect, useRef, useState } from "react";

const images = [
  "/images/banner1.webp",
  "/images/banner2.webp",
  "/images/banner3.webp",
];

export default function FrontBanner(): JSX.Element {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const intervalRef = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        if (!paused.current) next();
      }, 3000);
    };
    start();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
    >
      <div
        className="flex w-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
          transition: "transform 600ms ease",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="w-full flex-none"
            style={{ width: `${100 / images.length}%` }}
            aria-hidden={i !== index}
          >
            <img src={src} alt={`banner-${i + 1}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
        type="button"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
        type="button"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}