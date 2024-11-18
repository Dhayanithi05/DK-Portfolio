import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const skills = {
    technical: ["React.js", "JavaScript", "HTML/CSS", "TailwindCSS", "Git"],
    design: ["UI/UX Design", "Graphic Design", "Adobe Creative Suite", "Figma"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
  };

  return (
    <div className={`min-h-screen font-montserrat transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 p-4 sm:p-6 flex justify-between items-center"
      >
        <Link to="/" className="text-xl font-semibold hover:text-purple-500 transition-colors">D K</Link>
        <nav className="flex items-center gap-4">
          <Link 
            to="/" 
            className={`text-sm font-medium hover:text-purple-500 transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">About Me</h1>
          <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden shadow-[0_0_25px_5px_rgba(168,85,247,0.7)]">
            <img 
              src="profile.jpeg"  
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Hello! I'm Dhayanithi, a passionate Graphic Designer and Web Developer dedicated to crafting visually stunning and highly functional digital experiences.
          </p>
        </motion.section>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I started my journey in the digital world with a fascination for both design and technology. 
                This unique combination has allowed me to bridge the gap between aesthetic appeal and technical functionality.
              </p>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Currently, I'm focused on creating user-centric web experiences that combine clean code with 
                compelling visual design.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold mb-3 capitalize text-purple-500">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark ? 'bg-gray-800' : 'bg-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.section>
      </main>

      <footer className={`py-6 mt-12 text-center transition-colors ${
        isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'
      }`}>
        <p className="text-sm">© 2024 DHAYANITHI KARUNANITHI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutMe;