import { motion} from "framer-motion";
import { Github, ExternalLink} from "lucide-react";

// --- Types
interface Project {
    title: string;
    description: string;
    image: string; // path or url
    github: string;
    readMore: string;
  }

// --- Card Component
function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative">
        <img
          src={p.image}
          alt={p.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
          {p.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900/90 hover:text-gray-900 font-medium"
            aria-label={`${p.title} GitHub repo`}
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>

          <a
            href={p.readMore}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[#f07167] text-white font-semibold shadow-md hover:shadow-lg transition-all hover:translate-y-[-1px]"
            aria-label={`Read more about ${p.title}`}
          >
            Read More
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;