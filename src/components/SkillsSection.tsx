import { motion } from "framer-motion";
import { Code2, Gamepad2, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "C#", detail: "4+ Years" },
      { name: "OOP & SOLID", detail: "Advanced" },
      { name: "Design Patterns", detail: "State Machine, Observer, Command" },
      { name: "Data Structures", detail: "Spatial Hashing, BSP Trees" },
      { name: "Performance Optimization", detail: "GC, Memory, CPU Profiling" },
    ],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    skills: [
      { name: "Unity Engine", detail: "4+ Years · Shipped 6 Titles" },
      { name: "Multiplayer Netcode", detail: "Photon, Mirror, Fusion" },
      { name: "Physics Systems", detail: "Custom Controllers, Raycasting" },
      { name: "AI Systems", detail: "Behavior Trees, FSM, Pathfinding" },
      { name: "Shader Programming", detail: "Shader Graph, HLSL Basics" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Services",
    skills: [
      { name: "Git & GitHub", detail: "Version Control, CI/CD" },
      { name: "Firebase", detail: "Analytics, Remote Config, Auth" },
      { name: "Photon Networking", detail: "PUN2, Fusion, Voice" },
      { name: "Addressables", detail: "Asset Bundles, Memory Mgmt" },
      { name: "Cinemachine & Timeline", detail: "Camera, Cutscenes" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-primary">
            Technical Proficiency
          </span>
          <h2 className="mt-3 text-4xl font-medium tracking-tighter">Skills</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="surface-elevated rounded-2xl p-6 rim-light"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-start justify-between gap-4">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="font-mono text-[11px] text-muted-foreground text-right shrink-0">
                      {skill.detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
