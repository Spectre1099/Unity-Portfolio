import assassinHunter from "@/assets/Assassin Hunter 3D Game.jpg";
import clashOfTowers from "@/assets/clash of towers.png";
import constructionSimulator from "@/assets/Construction Simulator 3D Game.jpg";
import deadlyZombies from "@/assets/Deadly Zombies Attack Survival.jpg";
import demolitionDerby from "@/assets/Demolition Derby Car Games.jpg";
import hexaSort from "@/assets/Hexa Sort Color Stack Merge.png";
import monsterTruck from "@/assets/Monster Truck Derby Games.jpg";
import rocketCar from "@/assets/Rocket Car Car Ball Games.jpg";
import snake2048 from "@/assets/snake.io 2048.jpg";
import usBus from "@/assets/US Bus Simulator Driving Game.jpg";

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
  "Strategy",
  "Multiplayer",
  "Casual",
  "Racing",
  "Roleplaying",
  "Action",
  "FPS",
  "Simulation",
  "Vehicle",
  "Android",
  "iOS",
  "Mobile",
];

const studioContributions = [
  "Gameplay programming and systems implementation in Unity.",
  "Performance profiling and optimization for mobile builds.",
  "Collaboration with designers to iterate on mechanics and UX.",
];

const studioFeatures = [
  "Mobile-first controls and UI flow.",
  "Polished gameplay feedback with effects and audio.",
  "Optimized build size and load times.",
];

const studioChallenges = [
  "Balancing performance and visual quality across target devices.",
  "Rapid iteration cycles under production timelines.",
  "Maintaining stability during feature growth.",
];

export const projects: Project[] = [
  {
    id: "clash-of-towers",
    title: "Clash of Towers",
    description:
      "Fast-paced strategy game where you capture towers, outsmart rivals, and dominate battlefields in offline or real-time multiplayer matches.",
    image: clashOfTowers,
    categories: ["Strategy", "Multiplayer", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    featured: true,
    overview:
      "Clash of Towers is a tower-capture strategy experience with quick sessions and competitive pacing. Designed for both offline campaigns and real-time multiplayer play.",
    contributions: studioContributions,
    features: [
      "Offline campaigns and real-time multiplayer matches",
      "Quick session length with competitive pacing",
      "Tower capture and territory control mechanics",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=games.markhor.clashoftowers",
  },
  {
    id: "snake-2048-io",
    title: "Snake.io 2048",
    description:
      "Combines classic snake action with 2048 merging. Collect blocks, grow stronger, and outplay rivals in a fast-paced arena.",
    image: snake2048,
    categories: ["Casual", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    overview:
      "Snake.io 2048 blends arcade snake gameplay with 2048-style merging for a tactical, competitive loop.",
    contributions: studioContributions,
    features: [
      "Arcade snake gameplay with 2048 merging",
      "Smooth joystick controls",
      "Endless progression and competitive play",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=games.markhor.snake2048.io&hl=en",
  },
  {
    id: "demolition-derby-car-games",
    title: "Demolition Derby: Car Games",
    description:
      "High-octane derby game where you smash cars in intense arenas, customize your ride, and enjoy realistic damage.",
    image: demolitionDerby,
    categories: ["Casual", "Racing", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    overview:
      "A derby-focused driving game built around arena destruction, car customization, and multiple play modes.",
    contributions: studioContributions,
    features: [
      "Arena-based demolition gameplay",
      "Vehicle customization and upgrade loop",
      "Multiple modes with realistic damage feedback",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.fungames.demolition.derby.cargame",
  },
  {
    id: "rocket-car-car-ball-games",
    title: "Rocket Car: Car Ball Games",
    description:
      "Rocket-powered cars meet fast soccer action with stunts, abilities, and competitive arenas.",
    image: rocketCar,
    categories: ["Roleplaying", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer Intern",
    overview:
      "A high-speed car ball game featuring aerial stunts, special abilities, and arcade-friendly controls.",
    contributions: studioContributions,
    features: [
      "Rocket-powered driving and stunt mechanics",
      "Arena-based scoring and match flow",
      "Customization and progression systems",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.playgtgames.studios.rocket.car.car.ball.games",
  },
  {
    id: "monster-truck-derby-games",
    title: "Monster Truck: Derby Games",
    description:
      "Explosive demolition action with monster trucks across stunt, race, and survival modes.",
    image: monsterTruck,
    categories: ["Roleplaying", "Mobile"],
    techStack: ["Unity", "C#", "Mobile"],
    role: "Unity Developer",
    overview:
      "Monster Truck: Derby Games focuses on heavy-vehicle handling, high-impact collisions, and multi-mode gameplay.",
    contributions: studioContributions,
    features: [
      "Stunt, race, and survival modes",
      "Heavy vehicle handling and impacts",
      "Destruction-driven progression loop",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.play.extreme.monstertruck.derby.cargames",
  },
  {
    id: "assassin-hunter-3d-game",
    title: "Assassin Hunter 3D Game",
    description:
      "Fast-paced mobile action where you fight with knives, eliminate opponents, and complete challenges.",
    image: assassinHunter,
    categories: ["Action", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    overview:
      "A mobile action game built around stealth, quick combat, and short-session progression.",
    contributions: studioContributions,
    features: [
      "Knife-combat and takedown mechanics",
      "Character unlocks and progression",
      "Trap and encounter systems",
    ],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.fun.games.studios.assassin.hunters.games",
  },
  {
    id: "deadly-zombies-attack-survival",
    title: "Deadly Zombies Attack Survival",
    description:
      "Fight off zombies with powerful guns, upgrade weapons, and survive intense waves.",
    image: deadlyZombies,
    categories: ["FPS", "Action", "iOS"],
    techStack: ["Unity", "C#", "iOS"],
    role: "Unity Developer",
    overview:
      "An iOS zombie shooter focused on wave survival, weapon progression, and fast-paced combat.",
    contributions: studioContributions,
    features: ["Wave-based combat", "Weapon upgrades", "Fast, responsive controls"],
    challenges: studioChallenges,
    storeUrl:
      "https://apps.apple.com/ma/app/deadly-zombies-attack-survival/id1439223208",
  },
  {
    id: "construction-simulator-3d-game",
    title: "Construction Simulator 3D Game",
    description:
      "Operate heavy machinery to build roads and bridges for a modern city in 3D.",
    image: constructionSimulator,
    categories: ["Strategy", "iOS"],
    techStack: ["Unity", "C#", "iOS"],
    role: "Unity Developer",
    overview:
      "A construction simulation built for iOS with large vehicles, mission flow, and progression.",
    contributions: studioContributions,
    features: ["Heavy machinery operation", "City-building missions", "3D simulation flow"],
    challenges: studioChallenges,
    storeUrl:
      "https://apps.apple.com/ma/app/construction-simulator-3d-game/id1137886324",
  },
  {
    id: "us-bus-simulator-driving-game",
    title: "US Bus Simulator Driving Game",
    description:
      "Realistic bus driving with city missions, offroad routes, and immersive 3D environments.",
    image: usBus,
    categories: ["Simulation", "Vehicle", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    overview:
      "A bus-driving simulation with missions, city routes, and offline play.",
    contributions: studioContributions,
    features: ["City missions and route driving", "Offline play", "3D environments"],
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.gd.newbus.gamesfree.bus.simultor.driving.racing.freegame&hl=en_US",
  },
  {
    id: "hexa-sort-color-stack-merge",
    title: "Hexa Sort Color Stack Merge",
    description: "Casual Unity project built for rapid prototyping and polish.",
    image: hexaSort,
    categories: ["Casual", "Android"],
    techStack: ["Unity", "C#", "Android"],
    role: "Unity Developer",
    overview: "A mobile-focused Unity project delivered through iterative prototyping.",
    contributions: studioContributions,
    features: studioFeatures,
    challenges: studioChallenges,
    storeUrl:
      "https://play.google.com/store/apps/details?id=games.markhor.hexasortcolorstackmerge&hl=en",
  },
];
