import { ShowcaseCarousel } from "./ShowcaseCarousel";

const thesisSlides = [
  { src: "/projects/parity/home.png", alt: "Parity legal document integrity platform overview" },
  { src: "/projects/parity/upload.png", alt: "Parity document upload, metadata, hashing, and signing flow" },
  { src: "/projects/parity/verify.png", alt: "Parity document integrity and signature verification flow" },
];

export function ThesisCarousel() {
  return <ShowcaseCarousel slides={thesisSlides} label="Thesis project screenshots" />;
}
