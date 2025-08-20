import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
];

export default function TechStack() {
  return (
    <section
      className="flex items-center justify-center py-10"
      style={{ backgroundColor: "#fed9b7", minHeight: "40vh" }}
    >
      <div className="max-w-6xl w-full px-6 md:flex">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:flex-1/3 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
