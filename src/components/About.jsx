import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Music, BookOpen, Plane } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const interests = [
    {
      icon: Code,
      title: "React",
      description: "Building modern web apps",
    },
    { icon: Music, title: "Music", description: "Listening to melodies" },
    { icon: BookOpen, title: "Reading", description: "Exploring books" },
    { icon: Plane, title: "Travel", description: "Love to explore places" },
  ];

  return (
    <section
      id="about"
      className="section-container bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="content-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Illustration */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative glass rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-6">👩‍💻</div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    Junior React Developer
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ready to build amazing web experiences with React.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                  About Me
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I've recently completed my learning journey in web development
                  and I'm excited to start my career as a Junior React
                  Developer. I'm passionate about building modern, responsive
                  web applications and I'm eager to contribute to meaningful
                  projects.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I work well with React and enjoy creating clean, user-friendly
                  interfaces. In my free time, I love listening to music, which
                  helps me stay creative and relaxed.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Interests Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Interests & Hobbies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card text-center"
                >
                  <interest.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="font-semibold mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-400">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
