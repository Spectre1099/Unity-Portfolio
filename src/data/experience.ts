export type Experience = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  responsibilities: string[];
  projects?: string[];
};

export const experiences: Experience[] = [
  {
    company: "GeniTeam Solutions",
    role: "Software Engineer",
    dates: "July 2024 - July 2025",
    responsibilities: [
      "Developed gameplay systems, AI behaviors, physics-based mechanics, and responsive player controllers for mobile games.",
      "Built modular systems for gameplay, UI, enemy behaviors, and interaction mechanics.",
      "Optimized CPU, memory usage, and Android performance for smoother gameplay on low- and mid-range devices.",
      "Worked with debugging, profiling, object pooling, and scalable architecture practices.",
      "Collaborated with designers and artists in Agile workflows from prototype to production release.",
    ],
    projects: [
      "Slice It: Cut Them All",
      "Bot Crash: Combat Arena",
      "Agent Hunt Sniper: Pro Shooter",
      "Bike Surfers: Race Rush 3D",
    ],
  },
  {
    company: "GeniTeam Solutions",
    role: "Associate Software Engineer",
    dates: "July 2023 - June 2024",
    responsibilities: [
      "Built modular systems for UI, AI behaviors, meta-game systems, and gameplay flow.",
      "Enhanced gameplay experience through UI polish, VFX/SFX integration, and optimization improvements.",
      "Resolved critical gameplay and technical issues while maintaining production stability.",
      "Contributed to shipped projects across horror, casual, and action genres.",
    ],
    projects: [
      "Clash of Scary Squad",
      "Bombs Away: Survive Or Die",
      "Last Bomber Standing",
      "Amelie And The Lost Spirits",
      "Scary Stranger 3D",
    ],
  },
  {
    company: "GeniTeam Solutions",
    role: "Unity Game Developer Trainee",
    dates: "March 2023 - June 2023",
    responsibilities: [
      "Built gameplay mechanics, UI systems, and training projects using Unity and C#.",
      "Applied clean coding practices and gained hands-on experience in optimization and profiling.",
      "Collaborated with senior developers to implement production-ready gameplay features.",
    ],
  },
];
