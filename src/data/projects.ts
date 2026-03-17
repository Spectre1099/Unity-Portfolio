import projectFps from "@/assets/project-fps.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectRacing from "@/assets/project-racing.jpg";
import projectRpg from "@/assets/project-rpg.jpg";
import projectArena from "@/assets/project-arena.jpg";
import projectPlatformer from "@/assets/project-platformer.jpg";

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
};

export const categories = ["All", "Multiplayer", "Mobile", "FPS", "Casual", "RPG", "Racing"];

export const projects: Project[] = [
  {
    id: "neon-strike",
    title: "Neon Strike",
    description: "Architected a lag-compensated netcode system for a 16-player competitive FPS with sub-50ms response times.",
    image: projectFps,
    categories: ["Multiplayer", "FPS"],
    techStack: ["Unity", "C#", "Photon PUN2", "Mirror Networking"],
    role: "Lead Gameplay Programmer",
    featured: true,
    overview: "A fast-paced multiplayer FPS set in a cyberpunk world. 16 players compete in tactical 8v8 matches across procedurally augmented arenas.",
    contributions: [
      "Architected state-machine based Character Controller with custom gravity physics",
      "Built lag-compensation system achieving sub-50ms response for hit registration",
      "Implemented server-authoritative weapon system with client-side prediction",
      "Designed and optimized object pooling for projectiles and VFX, reducing GC by 40%",
    ],
    features: [
      "16-player competitive multiplayer with dedicated server support",
      "Custom ballistics system with bullet drop and penetration",
      "Dynamic spawn system with heat-map based balancing",
      "Real-time voice chat integration",
    ],
    challenges: [
      "Solved desync issues in high-latency environments by implementing a custom interpolation buffer",
      "Optimized physics queries from 4ms to 0.8ms per frame using spatial partitioning",
      "Reduced network bandwidth by 60% through delta compression and priority queuing",
    ],
  },
  {
    id: "gem-cascade",
    title: "Gem Cascade",
    description: "Engineered a performant match-3 engine with procedural level generation, reaching 500K+ downloads on mobile.",
    image: projectMobile,
    categories: ["Mobile", "Casual"],
    techStack: ["Unity", "C#", "Firebase", "Google Ads SDK"],
    role: "Solo Developer",
    overview: "A polished mobile puzzle game with 200+ handcrafted levels and a procedural endless mode. Built from scratch as a solo project.",
    contributions: [
      "Built custom match-3 engine with cascading chain reaction system",
      "Implemented procedural level generator with difficulty curve algorithms",
      "Integrated Firebase Analytics and Remote Config for A/B testing",
      "Optimized for low-end devices achieving stable 60fps on 2GB RAM phones",
    ],
    features: [
      "200+ levels with progressive difficulty",
      "Procedural endless mode with dynamic scoring",
      "Daily challenges with leaderboard integration",
      "Offline-first architecture with cloud save sync",
    ],
    challenges: [
      "Reduced load times by 70% through addressable asset bundles",
      "Solved memory pressure on low-end devices with aggressive texture atlasing",
      "Achieved 4.6★ rating through iterative user testing and analytics-driven design",
    ],
  },
  {
    id: "velocity-drift",
    title: "Velocity Drift",
    description: "Developed a custom vehicle physics controller with realistic drift mechanics and dynamic track deformation.",
    image: projectRacing,
    categories: ["Racing", "Multiplayer"],
    techStack: ["Unity", "C#", "Photon Fusion", "Shader Graph"],
    role: "Gameplay Programmer",
    featured: true,
    overview: "An arcade-style multiplayer racing game featuring 8-player online races with drift-based mechanics and destructible environments.",
    contributions: [
      "Developed custom WheelCollider replacement with improved drift physics",
      "Built deterministic replay system for ghost racing mode",
      "Implemented LOD management system for 8 vehicles + dynamic environment",
      "Created shader-based track deformation system for tire marks and damage",
    ],
    features: [
      "8-player online racing with rollback netcode",
      "Dynamic weather system affecting vehicle handling",
      "Ghost racing with deterministic replay",
      "Track editor with sharing capabilities",
    ],
    challenges: [
      "Achieved deterministic physics across different hardware using fixed-point math",
      "Optimized draw calls from 800 to 200 per frame using GPU instancing",
      "Solved rubber-banding in multiplayer through custom interpolation curves",
    ],
  },
  {
    id: "dungeon-depths",
    title: "Dungeon Depths",
    description: "Built a procedural dungeon generation system with enemy AI using behavior trees and custom pathfinding.",
    image: projectRpg,
    categories: ["RPG"],
    techStack: ["Unity", "C#", "A* Pathfinding", "Scriptable Objects"],
    role: "Systems Programmer",
    overview: "A roguelike dungeon crawler with procedurally generated levels, deep combat systems, and emergent enemy behaviors.",
    contributions: [
      "Designed procedural dungeon generator using BSP tree algorithm",
      "Implemented behavior tree-based enemy AI with modular action nodes",
      "Built custom A* pathfinding with dynamic obstacle avoidance",
      "Created data-driven item and ability system using Scriptable Objects",
    ],
    features: [
      "Infinite procedural dungeons with guaranteed solvability",
      "50+ enemy types with unique behavior patterns",
      "Crafting system with 200+ items",
      "Permadeath with meta-progression unlocks",
    ],
    challenges: [
      "Optimized dungeon generation from 2s to 50ms through iterative BSP refinement",
      "Solved AI performance with 100+ active entities using spatial hashing",
      "Balanced procedural difficulty through statistical analysis of play sessions",
    ],
  },
  {
    id: "battle-nexus",
    title: "Battle Nexus",
    description: "Implemented ability system with 30+ unique skills, combo chains, and real-time multiplayer synchronization.",
    image: projectArena,
    categories: ["Multiplayer", "Mobile"],
    techStack: ["Unity", "C#", "Photon PUN2", "DOTween"],
    role: "Combat Systems Programmer",
    overview: "A real-time multiplayer battle arena for mobile with hero-based combat and team objectives.",
    contributions: [
      "Architected modular ability system supporting 30+ unique skills",
      "Built combo chain system with input buffering and cancel windows",
      "Implemented real-time ability synchronization with rollback support",
      "Designed hitbox/hurtbox system with frame-perfect collision detection",
    ],
    features: [
      "5v5 real-time multiplayer battles",
      "15 unique heroes with distinct ability kits",
      "Ranked matchmaking with ELO-based system",
      "Spectator mode with replay controls",
    ],
    challenges: [
      "Synchronized complex ability interactions across 10 players with minimal bandwidth",
      "Achieved responsive controls on mobile with 3-frame input latency",
      "Balanced 30+ abilities through data-driven tuning pipeline",
    ],
  },
  {
    id: "shadow-leap",
    title: "Shadow Leap",
    description: "Created a precision platformer with custom character controller, wall mechanics, and a level editor.",
    image: projectPlatformer,
    categories: ["Casual"],
    techStack: ["Unity", "C#", "Cinemachine", "Timeline"],
    role: "Lead Developer",
    overview: "A challenging precision platformer with tight controls, atmospheric visuals, and a built-in level editor for community content.",
    contributions: [
      "Built pixel-perfect character controller with coyote time and input buffering",
      "Implemented wall slide, wall jump, and dash mechanics with state machine",
      "Created node-based level editor with community sharing",
      "Designed dynamic camera system using Cinemachine with custom extensions",
    ],
    features: [
      "80 handcrafted levels across 4 worlds",
      "Community level editor with sharing",
      "Speedrun mode with global leaderboards",
      "Accessibility options for difficulty customization",
    ],
    challenges: [
      "Achieved 1-frame input responsiveness through custom input handling",
      "Solved camera jitter with sub-pixel movement and render interpolation",
      "Optimized parallax backgrounds for mobile achieving 60fps on target devices",
    ],
  },
];
