import { motion } from "framer-motion";

const skills = [
  "Gameplay Programming (C#, C++, Lua)",
  "Performance Profiling/Optimization",
  "Multiplayer: Photon PUN 2, Fishnet, PlayFab",
  "Game Systems Architecture",
  "UI/UX Implementation (Unity UI)",
  "Git / Version Control",
  "Web Games",
  "Defold Engine",
  "Plugins",
  "Casual Games",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-12 surface-elevated rounded-2xl p-8 rim-light"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground list-disc list-inside">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;