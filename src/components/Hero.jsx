import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";
import { socialLinks } from "../data/socialLinks";
import { ScrollReveal, FadeIn } from "./ScrollReveal";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";

// Simple Typewriter Component
const TypewriterText = ({ texts = ["Frontend Developer"] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="gradient-text font-semibold">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-purple-400 ml-1"
      />
    </span>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const handleDownloadResume = () => {
    // Placeholder for resume download - user will add their resume
    alert(
      "Resume download will be available soon! Please add your resume file.",
    );
  };

  const socialIcons = [
    { Icon: Github, link: socialLinks.github, label: "GitHub" },
    { Icon: Linkedin, link: socialLinks.linkedin, label: "LinkedIn" },
    { Icon: Twitter, link: socialLinks.twitter, label: "Twitter" },
    // { Icon: Facebook, link: socialLinks.facebook, label: "Facebook" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] animate-float"
          ></motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] animate-float"
          ></motion.div>
        </div>
      </div>

      <div className="content-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.2} direction="down">
              <div className="inline-block px-4 py-2 rounded-full glass border-purple-500/30 text-purple-300 text-sm font-medium mb-2">
                👋 Welcome to my portfolio
              </div>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Sucharita</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                I'm a{" "}
                <TypewriterText
                  texts={[
                    "Frontend Developer",
                    "React Developer",
                    "Web Developer",
                  ]}
                />
              </h2>
            </motion.div>

            <FadeIn delay={0.5}>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Transforming complex ideas into elegant, responsive, and
                user-friendly digital experiences. Passionate about modern web
                technologies and clean code.
              </p>
            </FadeIn>

            {/* Buttons */}
            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={handleDownloadResume}
                  className="btn-primary flex items-center gap-2 group"
                >
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                  Download Resume
                </button>
                <a href="#contact" className="btn-outline">
                  Contact Me
                </a>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={0.7} direction="up">
              <div className="flex gap-4 mt-4">
                {socialIcons.map(({ Icon, link, label }, index) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 text-gray-300 hover:text-white"
                    title={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-glow"></div>

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl glass p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://i.ibb.co/Q7fhSGn0/sucahrita.jpg"
                    alt="Sucharita Sardar"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://i.ibb.co/Q7fhSGn0/sucahrita.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements with Parallax */}
              <motion.div
                style={{ y: y2 }}
                className="absolute -top-4 -right-4 glass p-4 rounded-2xl border border-white/10"
              >
                <div className="text-3xl">
                  <FaReact />
                </div>
              </motion.div>

              <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl border border-white/10"
              >
                <div className="text-3xl">
                  <FaNodeJs />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1 bg-white/5 backdrop-blur-sm"
          >
            <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
