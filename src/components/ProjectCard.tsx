import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl rim-light surface-elevated p-2"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Hover actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/project/${project.id}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            Details
          </Link>
          {project.storeUrl && (
            <a
              href={project.storeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
            >
              <ExternalLink size={14} strokeWidth={1.5} />
              Visit Store
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
            {project.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
