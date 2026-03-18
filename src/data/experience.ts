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
    company: "Markhor Games",
    role: "Unity Developer",
    dates: "Feb 2025 - Mar 2026",
    responsibilities: [
      "Created prototypes and full mobile games across Android, iOS, Web, and PC.",
      "Designed casual and hyper-casual gameplay systems from prototype to release.",
      "Integrated ad mediation, analytics, multiplayer features, and performance optimizations.",
      "Implemented object pooling and memory management to improve runtime stability and responsiveness.",
      "Collaborated with designers and backend engineers to rapidly prototype and iterate on gameplay systems.",
    ],
    projects: ["Snake 2048.io", "Clash of Towers", "Hexa Sort Color Stack Merge"],
  },
  {
    company: "BRIC Games",
    role: "Unity Developer",
    dates: "Aug 2022 - Feb 2025",
    responsibilities: [
      "Built multiplayer systems using FishNet, Photon PUN 2, Firebase, and PlayFab.",
      "Integrated dedicated servers to support scalable online gameplay.",
      "Engineered multiplayer prototypes and full projects, including Ludo-style and open-world off-road gameplay.",
      "Created modular gameplay systems using state machines and event-driven architecture for easier iteration and maintainability.",
      "Optimized render performance with draw call reduction, batching, and profiling-driven fixes to improve frame consistency.",
      "Coordinated via Git/GitHub on internal and client projects, including Web3/NFT initiatives.",
    ],
    projects: ["Cuboids.io"],
  },
  {
    company: "The Game Storm Studios (Pvt.) Ltd.",
    role: "Unity Developer",
    dates: "Jan 2022 - Aug 2022",
    responsibilities: [
      "Shipped and released 6+ iOS games including simulation and FPS titles.",
      "Improved UI/UX and gameplay features to strengthen player engagement and usability.",
      "Delivered production-ready games on schedule through close collaboration with designers and engineers.",
    ],
    projects: [
      "Deadly Zombies: Attack & Survival",
      "City Car Taxi Simulator 2023",
      "Extreme Snowmobile Racing Rush",
      "Advanced Car Parking Master 3D",
      "Wild Animals Transporter Game",
      "Construction Simulator 3D Game",
    ],
  },
  {
    company: "Virtual Dive Studios",
    role: "Unity Developer Intern",
    dates: "Sep 2021 - Dec 2021",
    responsibilities: [
      "Implemented gameplay systems and mechanics using C# in Unity.",
      "Built animations, particle systems, and cinematic sequences.",
      "Contributed to level design, gameplay features, and mobile performance optimization.",
      "Integrated features into production builds with designers and programmers.",
    ],
    projects: ["Rocket Car: Car Ball Games", "Manslayer 3D"],
  },
];
