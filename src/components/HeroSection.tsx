import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 hidden sm:block w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 hidden sm:block w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block font-mono text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-6">
            Hi, I'm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05]"
        >
          Muhammad{" "}
          <span className="text-gradient">Adeel Khan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Game Developer - Unity, Simulation, Casual. Mobile and Cross platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:brightness-110 active:translate-y-px transition-all glow-primary"
          >
            View Projects
            <ArrowDown size={16} strokeWidth={1.5} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1O_mZ6ounNv1KdOMIvf3X8d-NN2ufX_Py/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 surface-elevated rounded-xl font-medium text-sm text-foreground hover:bg-secondary transition-all active:translate-y-px"
          >
            <Download size={16} strokeWidth={1.5} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 surface-elevated rounded-xl font-medium text-sm text-foreground hover:bg-secondary transition-all active:translate-y-px"
          >
            <Mail size={16} strokeWidth={1.5} />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="https://www.linkedin.com/in/m-adeelkhan/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary/10 transition-all"
          >
            <Linkedin size={14} strokeWidth={1.5} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Balongi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary/10 transition-all"
          >
            <Github size={14} strokeWidth={1.5} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
