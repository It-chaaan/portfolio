"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/types/portfolio";

type ProjectCarouselProps = {
  images: ProjectImage[];
  projectName: string;
};

export function ProjectCarousel({ images, projectName }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const atStart = activeIndex === 0;
  const atEnd = activeIndex === images.length - 1;

  function selectImage(index: number) {
    setActiveIndex(index);
  }

  return (
    <section className="min-w-0" aria-label={`${projectName} gallery`}>
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="relative aspect-[3/2]">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 4rem), 58vw"
            className={`project-slide-enter ${activeImage.fit === "contain" ? "object-contain p-5 sm:p-7" : "object-cover"}`}
          />
        </div>

        <button
          type="button"
          onClick={() => selectImage(activeIndex - 1)}
          disabled={atStart}
          aria-label="Previous TAKO image"
          className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/90 text-lg text-[var(--text)] shadow-sm transition hover:border-[var(--border-strong)] disabled:cursor-not-allowed disabled:opacity-35 sm:bottom-4 sm:left-4"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => selectImage(activeIndex + 1)}
          disabled={atEnd}
          aria-label="Next TAKO image"
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
