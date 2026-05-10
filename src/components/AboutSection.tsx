import { motion } from "framer-motion";
import { Trophy, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Gameplay Systems",
    description: "Builds modular gameplay, UI, AI, and interaction systems for production games.",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizes CPU, memory, and Android performance for smooth mobile gameplay.",
  },
  {
    icon: Target,
    title: "Production Ready",
    description: "Ships polished features from prototype to release in collaborative Agile teams.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-primary">
            Background
          </span>
          <h2 className="mt-3 text-4xl font-medium tracking-tighter">About</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unity Developer with 3+ years of experience developing and shipping real-time
              interactive mobile applications using Unity and C#. Skilled in gameplay systems,
              AI behaviors, physics-based mechanics, performance optimization, and scalable
              architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in building production-ready features from prototype to release,
              including modular gameplay, UI, enemy behavior, interaction mechanics, debugging,
              profiling, object pooling, ads, analytics, and live ops integration.
            </p>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="surface-elevated rounded-xl p-4 rim-light flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <h.icon size={18} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground">{h.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
