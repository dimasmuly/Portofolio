// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Dimas Mulya Perkasa Ernanta',
  shortName: 'Dimas Mulya',
  initials: 'DM',
  role: 'Full-Stack & AI Engineer',
  intro:
    'I build end-to-end products — from Go and Next.js APIs to Flutter apps and computer-vision pipelines — for finance, healthcare, travel and video-analytics teams.',
  // File in public/; set to null to show the initials instead
  photo: 'images/profile.jpg',
  status: 'Open To New Opportunities',
  location: 'East Java, Indonesia',
  timeZone: 'Asia/Jakarta',
  timeZoneLabel: 'WIB · UTC+7 · remote since 2023',
  email: 'dimas230220020@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dimas-mulya-8552191b7/',
  github: 'https://github.com/dimasmuly',
  // File in public/; cvFileName is the name visitors get when they download it
  cv: 'files/Dimas-Mulya-Perkasa-Ernanta-CV.pdf',
  cvFileName: 'Dimas Mulya Perkasa Ernanta - Software Engineer.pdf',
};

export const stats = [
  { value: '3+', label: 'Years shipping production software' },
  { value: '4', label: 'Companies across fintech, health, travel & AI' },
  { value: '3.77', label: 'GPA / 4.00 in Information Systems' },
];

export const focusAreas = [
  { icon: 'server', title: 'Backend & APIs', detail: 'Go, Laravel, Django, FastAPI, Next.js, PostgreSQL' },
  { icon: 'devices', title: 'Web & Mobile', detail: 'React, Remix, Flutter' },
  { icon: 'sparkle', title: 'Applied AI', detail: 'Computer vision, RAG, LLM apps' },
];

export const stack = [
  { group: 'Languages', items: ['Go', 'JavaScript', 'Python', 'Dart', 'Java'] },
  { group: 'Frontend & Mobile', items: ['React', 'Next.js', 'Remix', 'Flutter', 'NgRx', 'HTML/CSS'] },
  { group: 'Backend', items: ['REST APIs', 'Laravel', 'Django', 'FastAPI', 'Flask', '.NET', 'Prisma'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Qdrant'] },
  { group: 'AI / ML', items: ['YOLO', 'Deep SORT', 'Grounding DINO', 'SAM', 'RAG', 'Roboflow'] },
  { group: 'Cloud & DevOps', items: ['AWS RDS', 'AWS S3', 'Docker', 'CI/CD', 'Git', 'Prometheus', 'Grafana'] },
];

export const award = {
  label: 'Award · 2022',
  title: 'Gemastik XV Finalist',
  detail: "Data Mining track — Indonesia's national ICT competition for university students.",
};

export const education = {
  label: 'Education · 2020–2024',
  title: 'Politeknik Negeri Jember',
  detail: 'Bachelor of Information Systems · GPA 3.77/4.00',
};

// `logo` is a file in public/ (set to null to show `initials`); bullet text supports **bold**
export const jobs = [
  {
    logo: 'images/logos/soma.png',
    initials: 'SM',
    title: 'Full-Stack Developer',
    company: 'PT Solusi Makmur (SOMA)',
    location: 'Bondowoso',
    period: 'Feb 2026 — Present',
    mode: 'Hybrid',
    current: true,
    bullets: [
      'Build and maintain **Sicare**, a homecare platform spanning a Laravel web app and a Flutter mobile app.',
      'Own backend services, business logic and the RESTful APIs shared by web and mobile clients.',
      'Troubleshoot production issues and tune performance and reliability across the stack.',
    ],
    tags: ['Laravel', 'Flutter', 'REST'],
  },
  {
    logo: 'images/logos/elnusa.png',
    initials: 'EP',
    title: 'Full-Stack Developer',
    company: 'PT Elnusa Petrofin',
    location: 'Jakarta',
    period: 'May 2026 — Oct 2026',
    mode: 'Remote',
    bullets: [
      'Built **treasury management** and **cash-flow tracking** applications supporting financial operations and monitoring.',
      'Developed the frontend in Remix and backend services and APIs in Next.js.',
      'Designed PostgreSQL schemas and data access with Prisma ORM for consistency and performance.',
    ],
    tags: ['Remix', 'Next.js', 'PostgreSQL', 'Prisma'],
  },
  {
    logo: 'images/logos/intinya-group.png',
    initials: 'IG',
    title: 'Full-Stack AI Developer',
    company: 'PT Intinya Group',
    location: 'Jakarta',
    period: 'Aug 2024 — Sep 2026',
    mode: 'Remote',
    bullets: [
      'Built real-time **CCTV object detection & tracking** over RTSP with YOLO and Deep SORT, shipped through CI/CD.',
      'Delivered an **outfit segmentation** service using Grounding DINO + SAM, containerized for real-time inference.',
      'Built a **RAG chatbot** on Qdrant and MongoDB, monitored with Prometheus and Grafana.',
      'Designed React dashboards and prototypes on top of the backend services.',
    ],
    tags: ['Python', 'YOLO', 'Qdrant', 'Docker', 'React'],
  },
  {
    logo: 'images/logos/global-data-inspirasi.png',
    initials: 'GD',
    title: 'Full-Stack Developer',
    company: 'PT Global Data Inspirasi',
    location: 'Yogyakarta',
    period: 'Aug 2023 — Aug 2025',
    mode: 'Remote',
    bullets: [
      'Built secure RESTful APIs in **Go** powering a hotel online travel agency — bookings, room availability and payments.',
      'Optimized database queries on AWS RDS (PostgreSQL) and managed media storage on S3.',
      'Set up Docker-based deployments with separate development, staging and production configs.',
    ],
    tags: ['Go', 'PostgreSQL', 'AWS', 'Docker'],
  },
];

// `area` maps to the bento grid slot in index.css; `visual` picks the illustration
export const projects = [
  {
    area: 'cctv',
    visual: 'cctv',
    label: 'Computer vision · Intinya Group',
    title: 'Real-time CCTV analytics',
    description:
      'Detects and tracks people and objects across live camera streams, with tracking IDs persisted for search and performance analysis.',
    tags: ['YOLO', 'Deep SORT', 'RTSP', 'Qdrant', 'PostgreSQL', 'CI/CD'],
  },
  {
    area: 'treasury',
    visual: 'bars',
    label: 'Fintech · Elnusa Petrofin',
    title: 'Treasury & cash-flow platform',
    description: 'Internal tools to manage treasury and track cash flow for an energy-sector company.',
    tags: ['Remix', 'Next.js', 'PostgreSQL', 'Prisma'],
  },
  {
    area: 'sicare',
    visual: 'ecg',
    compact: true,
    label: 'Healthtech · SOMA',
    title: 'Sicare homecare',
    description: 'Web + mobile platform for booking and managing homecare services.',
    tags: ['Laravel', 'Flutter'],
  },
  {
    area: 'ota',
    visual: 'log',
    compact: true,
    label: 'Travel · Global Data Inspirasi',
    title: 'Hotel booking API',
    description: 'Go backend for an OTA: rooms, bookings and payments.',
    tags: ['Go', 'AWS', 'Docker'],
  },
  {
    area: 'outfit',
    visual: 'segment',
    label: 'Computer vision · Intinya Group',
    title: 'Outfit detection & segmentation',
    description:
      'Zero-shot detection with Grounding DINO plus pixel-level masks from SAM, trained on Roboflow-prepared data from S3 and served as a scalable Docker service.',
    tags: ['Grounding DINO', 'SAM', 'Roboflow', 'AWS S3', 'Docker'],
  },
  {
    area: 'rag',
    visual: 'chat',
    label: 'LLM · Intinya Group',
    title: 'RAG knowledge chatbot',
    description: 'Retrieval-augmented chatbot grounded in company documents, with full observability.',
    tags: ['GPT-3.5 Turbo', 'Cohere', 'Qdrant', 'MongoDB', 'Grafana'],
  },
];
