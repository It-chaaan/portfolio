"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/types/portfolio";

type ProjectCarouselProps = {
  images: ProjectImage[];
  projectName: string;
  autoAdvance?: boolean;
};

const AUTO_ADVANCE_DELAY = 5_000;

export function ProjectCarousel({ images, projectName, autoAdvance = false }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const shouldLoop = autoAdvance;
  const activeImage = images[activeIndex];
  const atStart = !shouldLoop && activeIndex === 0;
  const atEnd = !shouldLoop && activeIndex === images.length - 1;

  function selectImage(index: number) {
    setActiveIndex(index);
  }

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => shouldLoop ? (index - 1 + images.length) % images.length : Math.max(0, index - 1));
  }, [images.length, shouldLoop]);

  const showNext = useCallback(() => {
    setActiveIndex((index) => shouldLoop ? (index + 1) % images.length : Math.min(images.length - 1, index + 1));
  }, [images.length, shouldLoop]);

  useEffect(() => {
    if (!autoAdvance || isHovered || isFocused) return;
    const timer = window.setTimeout(showNext, AUTO_ADVANCE_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeIndex, autoAdvance, isFocused, isHovered, showNext]);

  if (images.length === 0) return null;

  return (
    <section
      className="min-w-0"
      aria-label={`${projectName} gallery`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="relative aspect-[3/2]">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 4rem), 58vw"
            className={`project-slide-enter ${activeImage.fit === "cover" ? "object-cover" : "object-contain"}`}
          />
        </div>

        <button
          type="button"
          onClick={showPrevious}
          disabled={atStart}
          aria-label={`Previous ${projectName} image`}
          className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] disabled:cursor-not-allowed disabled:opacity-35 sm:bottom-4 sm:left-4"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={showNext}
          disabled={atEnd}
          aria-label={`Next ${projectName} image`}
          className="absolute bottom-3 right-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] disabled:cursor-not-allowed disabled:opacity-35 sm:bottom-4 sm:right-4"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <div className="flex gap-1.5" aria-label="Select gallery image">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => selectImage(index)}
              aria-label={`View image ${index + 1}: ${image.alt}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                activeIndex === index
                  ? "w-5 bg-[var(--accent)]"
                  : "w-1.5 bg-[var(--border-strong)] hover:bg-[var(--text-faint)]"
              }`}
            />
          ))}
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
