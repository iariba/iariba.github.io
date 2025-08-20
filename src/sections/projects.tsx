import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import {ArrowLeft, ArrowRight } from "lucide-react";
interface Project {
    title: string;
    description: string;
    image: string; // path or url
    github: string;
    readMore: string;
  }
  
  // --- Demo data (replace with your real projects)
  const projects: Project[] = [
    {
      title: "AI-Driven Retail Dashboard",
      description:
        "Real-time inventory & sales analytics with MERN, sockets, and role-based access.",
      image: "/images/welcome-1.png",
      github: "https://github.com/iariba/AI_Retail_Dashboard.git",
      readMore: "/projects/retail-dashboard",
    },
    {
      title: "Little Lemon",
      description:
        "A responsive restaurant website including food ordering, table reservation, and online menu.",
      image: "/images/res-hero1.jpeg",
      github: "https://github.com/iariba/little-lemon.git",
      readMore: "/projects/sales-forecaster",
    },
    {
      title: "ML Flask API",
      description:
        "Built a flask api for demand segmentation, customer clustering and mba analysis which returns result in pdf reports.",
      image: "/images/flask2.jpg",
      github: "https://github.com/iariba/flask_api.git",
      readMore: "/projects/portfolio-v2",
    },
  ];

export default function ProjectsSection() {
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <section
      id="projects"
      className="w-full"
      style={{ backgroundColor: "#fdfcdc" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Heading (same color style as Tech Stack heading: text-gray-900) */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Projects
        </h2>

        {/* Mobile: Carousel (only one card visible) */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard p={projects[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={prev}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white border border-black/5 shadow-sm active:scale-95"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" /> Prev
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index ? "bg-[#f07167] w-6" : "bg-gray-400/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white border border-black/5 shadow-sm active:scale-95"
              aria-label="Next project"
            >
              Next <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop / Tablet: Grid of cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
