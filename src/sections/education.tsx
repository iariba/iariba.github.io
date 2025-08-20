import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    { title: "Matriculation – 2019", institute: "CGS School" },
    { title: "Intermediate – 2021", institute: "KIPS College" },
    { title: "BSCS – 2025", institute: "Your University" },
  ];

  return (
    <section
      id="education"
      className="bg-[#fed9b7] py-16 px-6 md:px-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
        Education
      </h2>

      {/* Timeline container */}
      <ul className="  relative flex flex-col md:flex-row items-center justify-between w-full">
        {/* Line (vertical for mobile, horizontal for desktop) */}
        <div
          className="bg-[#f07167] absolute h-full w-1 left-8 md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full"
        ></div>

        {educationData.map((item, idx) => (
       <li
       key={idx}
       className=" left-8 relative w-full md:w-1/3 flex flex-col items-start text-left mb-12 md:mb-0 md:items-center"
     >
       <div className="w-full">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: idx * 0.2 }}
           viewport={{ once: true }}
           className="relative flex flex-col items-start md:items-center"
         >
           {/* Circle on the line */}
           <div
             className="left-0 absolute top-0 -translate-y-1/2 
                        md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
           >
             <div className="w-6 h-6 rounded-full bg-[#f07167] border-4 border-white shadow-md"></div>
           </div>
     
           {/* Text */}
           <div
             className="
               mt-0 md:mt-12
               md:text-center
               ml-8 md:ml-0
               w-50 md:w-auto
             "
           >
             <h3 className="text-lg font-semibold text-gray-800 md:mt-10">
               {item.title}
             </h3>
             <p className="text-sm text-gray-600">{item.institute}</p>
           </div>
         </motion.div>
       </div>
     </li>
     
        ))}
      </ul>
    </section>
  );
}
