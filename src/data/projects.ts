import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    num: "01",
    name: "Alalay",
    context: "Mobile and Web Application · 2026",

    summary:
      "A Filipino-first personal finance application for managing expenses, income, bills, budgets, and savings goals across web and mobile clients that share an Express and Supabase backend.",

    images: [
      "/projects/alalay/alalay-1.png",
      "/projects/alalay/alalay-2.png",
      "/projects/alalay/alalay-3.png",
    ],

    links: {
      web: "",
      github: "",
    },

    stack: [
      "React",
      "React Native",
      "Node.JS",
      "Express",
      "Supabase",
      "Google Gemini Flash",
      "Tesseract.js",
    ],

    contribution:
      "Developed the full-stack application using React, React Native, Node.JS, Express, and Supabase. Integrated Google Gemini Flash and Tesseract.js for financial assistance and receipt OCR, and implemented secure authentication, protected APIs, and Supabase Row Level Security.",

    features: [
      "Expense & Income Tracking",
      "Bills & Subscriptions",
      "Wallet & Bank Account Management",
      "Budgets",
      "Savings Goals",
      "AI Assistance",
      "Receipt OCR",
    ],
  },

  {
    num: "02",
    name: "TAKO — Teaching with Adaptive Knowledge Orchestration",
    context: "Hackathon · 3rd Place (40 Teams) · 2026",

    summary:
      "A mobile-first, offline-first Android educational math RPG for Grades 7–10. The team’s system combines bilingual learning flows with AI-assisted question phrasing and personalized feedback.",

    images: [
      { src: "/projects/tako/TAKO-LOBBY-cutout.png", alt: "TAKO game lobby screen in a phone mockup", fit: "contain" },
      { src: "/projects/tako/TAKO-GAME-cutout.png", alt: "TAKO math game screen in a phone mockup", fit: "contain" },
      { src: "/projects/tako/TAKO-COMLAB-cutout.png", alt: "TAKO community lab screen in a phone mockup", fit: "contain" },
      { src: "/projects/tako/HACKATHON.jpg", alt: "TAKO team at the hackathon", fit: "cover" },
    ],

    links: {
      apk: "https://github.com/russellmagdaong/tako-game/releases/download/Tako-Patch-1/TakoGame.apk",
      github: "",
    },

    stack: [
      "Godot 4",
      "GDScript",
      "Android",
      "SQLite",
      "Supabase",
      "Gemini 2.5 Flash",
    ],

    contribution:
      "Designed the game’s UI/UX in Figma, creating interfaces and user flows for the educational RPG. Collaborated with developers to translate those designs into the functional prototype, and presented the solution and its key features to the judging panel.",

    features: [
      "Offline-First Play",
      "Grade 7–10 Math",
      "English & Filipino",
      "Guest Mode",
      "Adaptive Feedback",
    ],
  },

  {
    num: "03",
    name: "Automated Cryptographic Hashing System for Legal Document Integrity Verification",
    context: "BSCS Software Engineering Thesis Project · 2026",

    summary:
      "A web-based thesis system for checking legal-document authenticity and integrity through SHA-256 hashing, ECDSA signatures, document management, role-based access control, and audit logging.",

    images: [
      "/projects/parity/home.png",
      "/projects/parity/upload.jpg",
      "/projects/parity/verify.jpg",
    ],

    links: {
      web: "",
      github: "",
    },

    stack: [
      "React",
      "Bootstrap",
      "Django REST Framework",
      "PostgreSQL",
      "SHA-256",
      "ECDSA",
    ],

    contribution:
      "Designed the UI/UX in Figma, developed responsive interfaces using React and Bootstrap, and integrated REST APIs for document verification, user management, and audit records.",

    features: [
      "Document Upload & Verification",
      "SHA-256 Hashing",
      "ECDSA Signatures",
      "ECDSA Key Management",
      "Audit Logs",
    ],
  },
];
