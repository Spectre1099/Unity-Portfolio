import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "2b03524c-a657-4ccf-bf06-ceb6d08183dd";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New Portfolio Message",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error("Submission failed");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl font-medium tracking-tighter">Contact</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Open to freelance projects, full-time roles, and collaboration opportunities.
              Let us build something great together.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "0320 0429141", href: "tel:+923200429141" },
                { icon: Mail, label: "adeeel00744@gmail.com", href: "mailto:adeeel00744@gmail.com" },
                { icon: Linkedin, label: "linkedin.com/in/m-adeelkhan", href: "https://www.linkedin.com/in/m-adeelkhan/" },
                { icon: Github, label: "github.com/Balongi-Co", href: "https://github.com/Balongi-Co" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <link.icon size={16} strokeWidth={1.5} className="group-hover:text-primary transition-colors" />
                  </div>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="surface-elevated rounded-2xl p-6 rim-light space-y-4"
          >
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:brightness-110 active:translate-y-px transition-all disabled:opacity-70"
            >
              <Send size={16} strokeWidth={1.5} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-xs text-primary">Message sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-xs text-destructive">Message failed to send. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;