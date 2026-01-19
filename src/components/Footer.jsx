import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { icon: FaGithub, link: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, link: socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, link: socialLinks.twitter, label: "Twitter" },
    // { icon: FaFacebook, link: socialLinks.facebook, label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Sucharita Sardar
            </h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass rounded-full hover:bg-purple-500/20 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {socialLinks.phone}
                </a>
              </li>
              <li className="text-gray-500">
                Available for freelance opportunities
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Sucharita Sardar. Made with{" "}
            <Heart size={16} className="text-red-500" fill="currentColor" /> and
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
