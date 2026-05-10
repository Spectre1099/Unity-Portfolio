import assassinHunter from "@/assets/Assassin Hunter 3D Game.jpg";
import clashOfTowers from "@/assets/clash of towers.png";
import constructionSimulator from "@/assets/Construction Simulator 3D Game.jpg";
import deadlyZombies from "@/assets/Deadly Zombies Attack Survival.jpg";
import demolitionDerby from "@/assets/Demolition Derby Car Games.jpg";
import hexaSort from "@/assets/Hexa Sort Color Stack Merge.png";
import monsterTruck from "@/assets/Monster Truck Derby Games.jpg";
import rocketCar from "@/assets/Rocket Car Car Ball Games.jpg";
import snake2048 from "@/assets/snake.io 2048.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  techStack: string[];
  role: string;
  overview: string;
  contributions: string[];
  features: string[];
  challenges: string[];
  featured?: boolean;
  storeUrl?: string;
};

export const categories = [
  "All",
  "Casual",
  "Action",
  "Horror",
  "Shooter",
  "Racing",
  "AI",
  "Mobile",
  "Android",
];

const gameplayContributions = [
  "Implemented gameplay systems and interaction mechanics in Unity and C#.",
  "Built modular UI, AI, and game flow systems for production use.",
  "Debugged, profiled, and optimized mobile performance for stable releases.",
];

const gameplayFeatures = [
  "Mobile-first controls and responsive gameplay feedback.",
  "Production-ready systems built with clean, reusable code.",
  "Optimized runtime behavior for low- and mid-range Android devices.",
];

const gameplayChallenges = [
  "Maintaining stable performance while adding gameplay features and polish.",
  "Building reusable systems that support fast iteration across game genres.",
  "Resolving critical gameplay issues without disrupting production timelines.",
];

export const projects: Project[] = [
  {
    id: "slice-it-cut-them-all",
    title: "Slice It: Cut Them All",
    description:
      "Mobile action project focused on slicing mechanics, responsive controls, and satisfying gameplay feedback.",
    image: hexaSort,
    categories: ["Casual", "Action", "Mobile", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Software Engineer",
    featured: true,
    overview:
      "Slice It: Cut Them All is a Unity mobile game project built around fast interaction, responsive player input, and polished moment-to-moment gameplay.",
    contributions: gameplayContributions,
    features: [
      "Slicing and interaction mechanics",
      "Responsive mobile controls",
      "Gameplay polish, debugging, and optimization",
    ],
    challenges: gameplayChallenges,
  },
  {
    id: "bot-crash-combat-arena",
    title: "Bot Crash: Combat Arena",
    description:
      "Combat arena project with AI-driven opponents, physics-based encounters, and mobile performance requirements.",
    image: clashOfTowers,
    categories: ["Action", "AI", "Mobile", "Android"],
    techStack: ["Unity", "C#", "AI"],
    role: "Software Engineer",
    overview:
      "Bot Crash: Combat Arena focuses on AI behavior, combat interactions, and reliable gameplay systems for mobile devices.",
    contributions: gameplayContributions,
    features: [
      "AI opponent behavior",
      "Combat arena gameplay flow",
      "Physics-based interaction systems",
    ],
    challenges: gameplayChallenges,
  },
  {
    id: "agent-hunt-sniper-pro-shooter",
    title: "Agent Hunt Sniper: Pro Shooter",
    description:
      "Shooter project involving aiming, player control, enemy behavior, and production-ready gameplay features.",
    image: assassinHunter,
    categories: ["Shooter", "Action", "AI", "Mobile", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Software Engineer",
    overview:
      "Agent Hunt Sniper: Pro Shooter is a mobile shooter project where gameplay systems, AI behavior, and responsive controls were central to the experience.",
    contributions: gameplayContributions,
    features: [
      "Shooter gameplay systems",
      "Enemy behavior and encounter flow",
      "Responsive player control implementation",
    ],
    challenges: gameplayChallenges,
  },
  {
    id: "bike-surfers-race-rush-3d",
    title: "Bike Surfers: Race Rush 3D",
    description:
      "3D racing game project focused on mobile controls, fast gameplay flow, and optimized runtime performance.",
    image: rocketCar,
    categories: ["Racing", "Action", "Mobile", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Software Engineer",
    overview:
      "Bike Surfers: Race Rush 3D is a racing-focused Unity project involving player control, gameplay flow, and performance tuning for Android.",
    contributions: gameplayContributions,
    features: [
      "3D racing gameplay",
      "Mobile control systems",
      "Performance-focused implementation",
    ],
    challenges: gameplayChallenges,
  },
  {
    id: "clash-of-scary-squad",
    title: "Clash of Scary Squad",
    description:
      "Horror/action project with modular gameplay flow, UI systems, and AI behavior support.",
    image: deadlyZombies,
    categories: ["Horror", "Action", "AI", "Mobile"],
    techStack: ["Unity", "C#"],
    role: "Associate Software Engineer",
    overview:
      "Clash of Scary Squad was a shipped project where modular UI, gameplay flow, and AI-related systems supported the production pipeline.",
    contributions: gameplayContributions,
    features: gameplayFeatures,
    challenges: gameplayChallenges,
  },
  {
    id: "bombs-away-survive-or-die",
    title: "Bombs Away: Survive Or Die",
    description:
      "Survival action game project involving gameplay flow, polish, and critical issue resolution.",
    image: demolitionDerby,
    categories: ["Action", "Casual", "Mobile"],
    techStack: ["Unity", "C#"],
    role: "Associate Software Engineer",
    overview:
      "Bombs Away: Survive Or Die is a survival-focused Unity project that involved production stability, gameplay polish, and system-level debugging.",
    contributions: gameplayContributions,
    features: gameplayFeatures,
    challenges: gameplayChallenges,
  },
  {
    id: "last-bomber-standing",
    title: "Last Bomber Standing",
    description:
      "Casual action project built around gameplay systems, meta-game flow, and mobile polish.",
    image: monsterTruck,
    categories: ["Casual", "Action", "Mobile"],
    techStack: ["Unity", "C#"],
    role: "Associate Software Engineer",
    overview:
      "Last Bomber Standing is a casual action project where modular systems supported gameplay flow, polish, and iteration.",
    contributions: gameplayContributions,
    features: gameplayFeatures,
    challenges: gameplayChallenges,
  },
  {
    id: "amelie-and-the-lost-spirits",
    title: "Amelie And The Lost Spirits",
    description:
      "Horror-adventure project supported by UI polish, gameplay systems, and production bug fixing.",
    image: constructionSimulator,
    categories: ["Horror", "Mobile"],
    techStack: ["Unity", "C#"],
    role: "Associate Software Engineer",
    overview:
      "Amelie And The Lost Spirits was part of the shipped project work across horror and action genres, with focus on production-ready gameplay features.",
    contributions: gameplayContributions,
    features: gameplayFeatures,
    challenges: gameplayChallenges,
  },
  {
    id: "scary-stranger-3d",
    title: "Scary Stranger 3D",
    description:
      "3D horror project involving AI behavior, UI systems, gameplay flow, and optimization work.",
    image: snake2048,
    categories: ["Horror", "AI", "Mobile", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Associate Software Engineer",
    overview:
      "Scary Stranger 3D is a horror-oriented Unity project involving gameplay flow, AI behavior support, UI implementation, and optimization.",
    contributions: gameplayContributions,
    features: gameplayFeatures,
    challenges: gameplayChallenges,
  },
];
