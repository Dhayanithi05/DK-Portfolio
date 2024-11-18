import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Globe, ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);

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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const CodeWindow = () => (
    <div className="w-full max-w-md">
      <div className={`rounded-lg shadow-xl overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gray-900'
      }`}>
        <div className={`flex items-center p-4 ${
          isDark ? 'bg-gray-800' : 'bg-gray-800'
        }`}>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className={`ml-4 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-100'
          }`}>Portfolio.js</div>
        </div>
        
        <div className="p-4 font-mono text-sm">
          <pre className={`whitespace-pre-wrap ${
            isDark ? 'text-gray-300' : 'text-gray-100'
          }`}>
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

  return (
    <div className={`min-h-screen font-montserrat transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 flex justify-between items-center"
      >
        <div className="text-xl font-semibold">D K</div>
        <nav className="flex items-center">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <main className="container mx-auto px-4 md:px-32">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-5xl font-semibold mb-2 leading-tight"
            >
              DHAYANITHI
            </motion.h1>
            <h2 className={`text-2xl mb-4 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Graphic Designer & Web Developer
            </h2>
            <p className={`mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm an entry-level Graphic Designer & Web Developer with expertise in creating 
              visually engaging and user-centric digital experiences. Skilled in design software 
              such as Adobe Creative Suite and web technologies.
            </p>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-2 p-4 rounded-lg inline-flex gap-10 transition-colors ${
            isDark ? 'bg-gray-900' : 'bg-gray-200'
          }`}
        >
          <div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <div className="text-purple-500 text-xl font-medium">About Me</div>
    <motion.a
      href="./about"
      whileHover={{ scale: 1.1 }}
      className="hover:text-purple-400 transition-colors font-medium"
    >
  <ExternalLink className="w-6 h-6" />
  </motion.a>
  </div>
</div>
<div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <div className="text-purple-500 text-xl font-medium">Projects</div>
    <motion.a
      href="/project"         // Update this path
      whileHover={{ scale: 1.1 }}
      className="hover:text-purple-400 transition-colors font-medium"
    >
      <ExternalLink className="w-6 h-6" />
    </motion.a>
  </div>
</div>
     <div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <div className="text-purple-500 text-xl font-medium">Resume</div>
    <motion.a
      href="/path/to/resume.pdf"  // Replace with your actual PDF file path
      download="resume.pdf"       // Trigger download on click
      whileHover={{ scale: 1.1 }}
      className="hover:text-purple-400 transition-colors font-medium"
    >
      <Download className="w-6 h-6" />
    </motion.a>
  </div>
          </div>
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
 <footer className={`fixed bottom-0 left-0 w-full py-4 text-center transition-colors ${
    isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'
  }`}>
  <p className="text-sm">© 2024 DHAYANITHI KARUNANITHI. All rights reserved.</p>
</footer>
      </div>
  );
};

export default Portfolio;