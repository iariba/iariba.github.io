import { motion } from "framer-motion";
import { Code2, Github, Laptop } from "lucide-react";
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-16"
      style={{ backgroundColor: "#f07167" }} // Change to "#fed9b7" if you prefer
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Ariba Adnan
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mt-2">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-white/90 mt-4">
            Crafting modern, responsive, and scalable web apps with clean code.
          </p>
          <motion.a
          href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{}}
            className="mt-6 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block
             text-gray-800 bg-[#fdfcdc] 
             hover:bg-[#fed9b7] hover:text-gray-900"
          >
            
            View My Projects
          </motion.a>
        </motion.div>

        {/* Right Side Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end gap-6"
        >
          <div className="grid grid-cols-2 gap-6 text-white text-5xl">
            <Code2 className="hover:scale-110 transition-transform" />
            <Github className="hover:scale-110 transition-transform" />
            <Laptop className="hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
