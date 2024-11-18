import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Moon, Sun } from 'lucide-react';

const Projects = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React.js and Framer Motion",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing online store inventory and sales",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourdashboard.com"
    },
    {
      title: "Social Media App",
      description: "Full-stack social media application with real-time messaging",
      tags: ["React", "Firebase", "Socket.io"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/social-app",
      live: "https://yoursocialapp.com"
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates unique images using AI models and provides editing capabilities",
      tags: ["React", "OpenAI API", "Canvas API", "Express"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/ai-image-generator",
      live: "https://ai-image-gen.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team features",
      tags: ["React", "Redux", "GraphQL", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-pro.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and animated visualizations",
      tags: ["React", "Weather API", "D3.js", "Tailwind"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-viz.com"
    }
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`rounded-lg overflow-hidden shadow-lg transition-colors ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-5 py-1 text-sm rounded-full bg-purple-500 text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
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
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="text-xl font-semibold"
        >
          D K
        </motion.a>
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

      <main className="container mx-auto px-4 md:px-32 py-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-semibold mb-4">Projects</h1>
          <p className={`max-w-2xl text-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
            />
          ))}
        </div>
      </main>

      <footer className={`fixed bottom-0 left-0 w-full py-4 text-center transition-colors ${
        isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'
      }`}>
        <p className="text-sm">© 2024 DHAYANITHI KARUNANITHI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;