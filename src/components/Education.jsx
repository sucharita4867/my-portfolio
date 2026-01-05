import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      degree: "Bachelor of Arts",
      institution: "University of Calcutta",
      location: "Kolkata, West Bengal",
      year: "2023 - 2026",
      grade: "Percentage: 50%",
      achievements: ["Arts Stream"],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mohanpur KKGC Institution",
      location: "Kolkata, West Bengal",
      year: "2021 - 2023",
      grade: "Percentage: 65%",
      achievements: ["Geography Stream"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="education"
      className="section-container bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="content-container">
        <motion.div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey and educational qualifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>
                )}

                <div className="card hover:border-purple-500/30 relative">
                  {/* Icon */}
                  <div className="absolute -left-3 top-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hidden md:flex">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="md:ml-12">
                    {/* Year Badge */}
                    <div className="flex items-center gap-2 text-purple-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>

                    {/* Institution */}
                    <p className="text-lg text-purple-300 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 mb-3">{edu.location}</p>

                    {/* Grade */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-yellow-500">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-300">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-400 flex items-start"
                            >
                              <span className="text-purple-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
