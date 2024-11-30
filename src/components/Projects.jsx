import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowDown, ArrowUp } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Projects = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Check if we're near the bottom (within 100px)
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
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
      className="rounded-lg overflow-hidden shadow-lg transition-colors bg-gray-900/80 backdrop-blur-sm border border-purple-500/30"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="mb-4 text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
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
            className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
          >
            <Github className="w-5 h-5 text-purple-400" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-purple-400" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen font-montserrat transition-all duration-300 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-6 py-4 md:px-8 md:py-5 flex justify-between items-center fixed w-full z-50 bg-transparent"
      >
        <RouterLink 
          to="/" 
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform"
        >
          D K
        </RouterLink>

        <motion.button
          onClick={handleScroll}
          className="p-2 rounded-full bg-transparent hover:bg-purple-500/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAtBottom ? (
            <ArrowUp className="w-5 h-5 text-purple-400" />
          ) : (
            <ArrowDown className="w-5 h-5 text-purple-400" />
          )}
        </motion.button>
      </motion.header>

      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
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

      <footer className="fixed bottom-0 left-0 w-full py-4 text-center transition-all backdrop-blur-sm bg-gray-900/80 text-gray-400">
        <p className="text-sm">© 2024 DK. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;