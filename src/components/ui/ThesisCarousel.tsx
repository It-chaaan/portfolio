"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_DELAY = 5_000;

const thesisSlides = [
  {
    image: "/projects/parity/home.png",
    alt: "Parity legal document integrity platform overview",
    featureTitle: "Document Signing & Validation",
    featureDescription:
      "Introduces the platform’s sign, validate, and audit workflows for business-critical legal documents.",
  },
  {
    image: "/projects/parity/upload.png",
    alt: "Parity document upload, metadata, hashing, and signing flow",
    featureTitle: "Document Upload, Hashing & Signing",
    featureDescription:
      "Guides document submission through metadata capture before the file is hashed and signed for integrity protection.",
  },
  {
    image: "/projects/parity/verify.png",
    alt: "Parity document integrity and signature verification flow",
    featureTitle: "Document Integrity Verification",
    featureDescription:
      "Checks a submitted document against its reference record to validate hash integrity and signature authenticity.",
  },
] as const;

type SlideDirection = "next" | "previous";
type LeavingSlide = { slideIndex: number; direction: SlideDirection } | null;

export function ThesisCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("next");
  const [leavingSlide, setLeavingSlide] = useState<LeavingSlide>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const activeThesisSlide = thesisSlides[activeSlide];
  const isInteracting = isHovered || isFocused;

  const goToSlide = useCallback((nextSlide: number, direction: SlideDirection) => {
    if (nextSlide === activeSlide) return;

    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
    }

    setLeavingSlide({ slideIndex: activeSlide, direction });
    setSlideDirection(direction);
    setActiveSlide(nextSlide);
    transitionTimer.current = window.setTimeout(() => {
      setLeavingSlide(null);
      transitionTimer.current = null;
    }, 320);
  }, [activeSlide]);

  useEffect(() => () => {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
    }
  }, []);

  const showNextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % thesisSlides.length, "next");
  }, [activeSlide, goToSlide]);

  const showPreviousSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + thesisSlides.length) % thesisSlides.length, "previous");
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    if (isInteracting) return;

    const timer = window.setTimeout(showNextSlide, AUTO_ADVANCE_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeSlide, isInteracting, showNextSlide]);

  function selectSlide(slideIndex: number) {
    if (slideIndex === activeSlide) return;
    goToSlide(slideIndex, slideIndex > activeSlide ? "next" : "previous");
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  }

  const transitionClass = slideDirection === "next"
    ? "thesis-slide-enter-next"
    : "thesis-slide-enter-previous";

  return (
    <div
      className="min-w-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={handleBlur}
    >
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="relative aspect-[3/2]">
          {leavingSlide && (
            <Image
              src={thesisSlides[leavingSlide.slideIndex].image}
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className={`thesis-slide-exit-${leavingSlide.direction} object-contain`}
            />
          )}
          <Image
            key={activeThesisSlide.image}
            src={activeThesisSlide.image}
            alt={activeThesisSlide.alt}
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
            className={`${transitionClass} z-[1] object-contain`}
          />
        </div>

        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous project screenshot"
          className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] sm:bottom-4 sm:left-4"
        >
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[var(--text)] opacity-0 transition-opacity duration-200 group-hover:opacity-55 group-focus-within:opacity-70 motion-reduce:transition-none">‹</span>
        </button>
        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Next project screenshot"
          className="absolute bottom-3 right-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] sm:bottom-4 sm:right-4"
        >
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-[var(--text)] opacity-0 transition-opacity duration-200 group-hover:opacity-55 group-focus-within:opacity-70 motion-reduce:transition-none">›</span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1" aria-label="Project screenshots">
        {thesisSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => selectSlide(index)}
            aria-label={`View project screenshot ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
              activeSlide === index
                ? "w-5 bg-[var(--accent)]"
                : "w-1.5 bg-[var(--border-strong)] hover:bg-[var(--text-faint)]"
            }`}
          />
        ))}
        <p className="ml-auto font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]" aria-live="polite">
          {String(activeSlide + 1).padStart(2, "0")} / {String(thesisSlides.length).padStart(2, "0")}
        </p>
      </div>

    </div>
  );
}
