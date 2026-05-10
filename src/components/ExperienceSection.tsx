import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-primary">
            Career Timeline
          </span>
          <h2 className="mt-3 text-4xl font-medium tracking-tighter">Work Experience</h2>
          <p className="mt-3 text-sm text-primary">
            Total experience: 3+ years
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="surface-elevated rounded-2xl p-6 rim-light"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  <div>{exp.dates}</div>
                  {exp.location && <div>{exp.location}</div>}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Projects Worked On
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
