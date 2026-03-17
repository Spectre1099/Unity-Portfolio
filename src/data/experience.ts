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
      "Design and develop casual and hyper-casual games from prototype to full release using Unity and C#.",
      "Implement ad mediation and analytics systems to support monetization and player behavior tracking.",
      "Develop and integrate complex gameplay systems, performance optimizations, and scalable game architecture.",
      "Implement multiplayer features and networking systems for online gameplay.",
      "Collaborate with designers and developers to rapidly prototype and iterate on new game ideas.",
    ],
    projects: ["Snake 2048.io", "Clash of Towers", "Hexa Sort Color Stack Merge"],
  },
  {
    company: "BRIC Games",
    role: "Unity Developer",
    dates: "Aug 2022 - Feb 2025",
    location: "Lahore",
    responsibilities: [
      "Develop and implement multiplayer systems using Fish Networking, Photon PUN 2, Firebase, and PlayFab.",
      "Integrate and configure dedicated servers to support scalable online gameplay.",
      "Build multiplayer prototypes and full projects, including systems similar to multiplayer Ludo and open-world offroad gameplay.",
      "Assist in developing multiplayer plugins and networking features in Unity.",
      "Collaborate with cross-functional teams using Git and GitHub for version control and code collaboration.",
      "Contribute to internal and client projects, including Web3/NFT-based initiatives like Cuboids.io.",
    ],
  },
  {
    company: "The Game Storm Studios (Pvt.) Ltd.",
    role: "Unity Developer",
    dates: "Jan 2022 - Aug 2022",
    location: "Lahore",
    responsibilities: [
      "Developed and released 6+ iOS games from scratch using Unity.",
      "Improved existing games by updating GUI and gameplay features to increase engagement.",
      "Collaborated with programmers and designers to deliver production-ready games on schedule.",
    ],
    projects: [
      "Deadly Zombies: Attack & Survival",
      "City Car Taxi Simulator 2K23",
      "Extreme Snowmobile Racing Rush",
      "Advance Car Parking Master 3D",
      "Wild Animals Transporter Game",
      "Construction Simulator 3D Game",
    ],
  },
  {
    company: "Virtual Dive Studios",
    role: "Unity Developer Intern",
    dates: "Sep 2021 - Dec 2021",
    location: "Lahore",
    responsibilities: [
      "Built gameplay systems and mechanics using C# in Unity.",
      "Implemented animations, particle systems, and cinematic sequences to enhance player experience.",
      "Assisted in level design, gameplay features, and mobile performance optimization.",
      "Collaborated with programmers and designers to integrate features into production builds.",
    ],
    projects: ["Rocket Car: Car Ball Games", "Manslayer 3D"],
  },
];