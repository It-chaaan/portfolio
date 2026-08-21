export type SectionId = "home" | "projects" | "skills" | "experience" | "education" | "contact";

export type NavigationItem = { 
    id: SectionId; 
    label: string; 
    num: string 
};

export type Experience = { 
    period: string; 
    title: string; 
    company: string; 
    desc: string; 
    stack: string[] 
};

export type SkillCategory = { 
    label: string; 
    items: string[] 
};

export type Project = {
  num: string;
  name: string;
  context: string;
  summary: string;
  stack: string[];
  contribution: string;
  features: string[];

  images?: Array<string | ProjectImage>;

  links?: {
    web?: string;
    apk?: string;
    github?: string;
  };
};

export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};
