import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Globe, ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [codeText, setCodeText] = useState('');

  const codeSnippet = `const Dhayanithi = {
  role: "Graphic Designer & Web Developer",
  skills: [
    "UI/UX Design", "React.js",
    "TailwindCSS", "Graphic Design"
  ],
  
// Currently working on:
new Project({
  type: "Portfolio",
  status: "In Progress",
  technologies: ["React", "Framer"]
});`;

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setCodeText(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const CodeWindow = () => (
    <div className="w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <div className="rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm border bg-gray-900/80 border-purple-500/30">
        <div className="flex items-center p-4 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-sm text-gray-400">Portfolio.js</div>
        </div>
        <div className="p-4 font-mono text-sm">
          <pre className="whitespace-pre-wrap text-gray-300">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0 }}
            >
              {codeText}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-purple-500 ml-1"
            />
          </pre>
        </div>
      </div>
    </div>
  );

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
  ];

  return (
    <div className="min-h-screen font-montserrat transition-all duration-300 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-6 py-4 md:px-8 md:py-5 flex justify-between items-center fixed w-full z-50 bg-transparent"
      >
        <Link 
          to="/project" 
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform"
        >
          D K
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/project"
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            Projects
          </Link>
          <a
            href="/path/to/resume.pdf"
            download
            className="px-4 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors font-medium"
          >
            Resume
          </a>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-16 md:pt-20">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-12 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              DHAYANITHI
            </motion.h1>
            <h2 className="text-2xl mb-4 font-medium text-gray-400">
              Graphic Designer & Web Developer
            </h2>
            <p className="mb-8 leading-relaxed text-gray-400">
              I'm an entry-level Graphic Designer & Web Developer with expertise in creating 
              visually engaging and user-centric digital experiences. Skilled in design software 
              such as Adobe Creative Suite and web technologies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-purple-400" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="md:w-1/2 flex justify-center"
          >
            <CodeWindow />
          </motion.div>
        </motion.section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full py-4 text-center transition-all backdrop-blur-sm bg-gray-900/80 text-gray-400">
        <p className="text-sm">© 2024 DK. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;