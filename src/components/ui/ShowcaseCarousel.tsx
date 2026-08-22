"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/types/portfolio";

const AUTO_ADVANCE_DELAY = 5_000;

type ShowcaseCarouselProps = {
  slides: ProjectImage[];
  label: string;
};

type SlideDirection = "next" | "previous";
type LeavingSlide = { slideIndex: number; direction: SlideDirection } | null;

export function ShowcaseCarousel({ slides, label }: ShowcaseCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("next");
  const [leavingSlide, setLeavingSlide] = useState<LeavingSlide>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const activeProjectSlide = slides[activeSlide];
  const isInteracting = isHovered || isFocused;

  const goToSlide = useCallback((nextSlide: number, direction: SlideDirection) => {
    if (nextSlide === activeSlide) return;
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);

    setLeavingSlide({ slideIndex: activeSlide, direction });
    setSlideDirection(direction);
    setActiveSlide(nextSlide);
    transitionTimer.current = window.setTimeout(() => {
      setLeavingSlide(null);
      transitionTimer.current = null;
    }, 320);
  }, [activeSlide]);

  useEffect(() => () => {
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
  }, []);

  const showNextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % slides.length, "next");
  }, [activeSlide, goToSlide, slides.length]);

  const showPreviousSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length, "previous");
  }, [activeSlide, goToSlide, slides.length]);

  useEffect(() => {
    if (isInteracting) return;
    const timer = window.setTimeout(showNextSlide, AUTO_ADVANCE_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeSlide, isInteracting, showNextSlide]);

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
  }

  const transitionClass = slideDirection === "next"
    ? "thesis-slide-enter-next"
    : "thesis-slide-enter-previous";

  if (slides.length === 0) return null;

  return (
    <div
      className="min-w-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={handleBlur}
      aria-label={label}
    >
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="relative aspect-[3/2]">
          {leavingSlide ? (
            <Image
              src={slides[leavingSlide.slideIndex].src}
              alt=""
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 4rem), 58vw"
              className={`thesis-slide-exit-${leavingSlide.direction} object-contain`}
            />
          ) : null}
          <Image
            key={activeProjectSlide.src}
            src={activeProjectSlide.src}
            alt={activeProjectSlide.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 4rem), 58vw"
            className={`${transitionClass} z-[1] object-contain`}
          />
        </div>

        <button type="button" onClick={showPreviousSlide} aria-label="Previous project screenshot" className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] sm:bottom-4 sm:left-4">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={showNextSlide} aria-label="Next project screenshot" className="absolute bottom-3 right-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] sm:bottom-4 sm:right-4">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1" aria-label="Project screenshots">
        <div className="flex gap-1.5">
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" onClick={() => goToSlide(index, index > activeSlide ? "next" : "previous")} aria-label={`View project screenshot ${index + 1}`} aria-current={activeSlide === index ? "true" : undefined} className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${activeSlide === index ? "w-5 bg-[var(--accent)]" : "w-1.5 bg-[var(--border-strong)] hover:bg-[var(--text-faint)]"}`} />
          ))}
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]" aria-live="polite">
          {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>

    </div>
  );
}
