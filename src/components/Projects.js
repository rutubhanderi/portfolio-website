import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/project1.png';
import img2 from '../assets/images/project2.png';
import img3 from '../assets/images/project3.png';
import img4 from '../assets/images/project4.jpg';
import img5 from '../assets/images/project5.png';
import img6 from '../assets/images/project6.png';
const ProjectCard = ({ title, description, image, tech, github, index, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl project-card group relative"
      style={{ opacity: 0, transitionDelay: `${0.1 * index}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="relative overflow-hidden h-48">
        <img
          src={image || `/api/placeholder/600/300?text=${encodeURIComponent(title)}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-3">
              <a
                href={github}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-blue-500 text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} GitHub repository`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>

        {/* Tech stack */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 text-xs rounded-md"
                style={{
                  transitionDelay: `${0.05 * idx}s`,
                  transform: isHovered ? 'translateY(0)' : 'translateY(5px)',
                  opacity: isHovered ? 1 : 0.8,
                  transition: 'transform 0.3s ease, opacity 0.3s ease'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Links for larger screens */}
        <div className="hidden sm:flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a
            href={github}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors flex items-center gap-1 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: "NetSift - Real Time NIDS",
      description:"Developed a real-time Network Intrusion Detection System using a hybrid CNN-LSTM model, achieving 95% accuracy on the CICIDS2017 dataset for detecting DoS, DDoS, and other attacks",
      image: img1, 
      tech: ["Python", "FastAPI", "CNN-LSTM", "React", "Chart.js"],
      github: "https://github.com/rutubhanderi/Realtime-NIDS",
      category: "Deep Learning"
    },
    {
      title: "Supply Chain Analysis",
      description: "Analyzed 18,000+ supply chain records to identify trends in sales, discounts, and profit using Python with data visualization through Power BI dashboards.",
      image: img2,
      tech: ["Python", "Pandas", "Seaborn", "Power BI"],
      github: "https://github.com/rutubhanderi/supply-chain-analysis",
      category: "Data Analysis"
    },
    {
      title: "Dynamic Pricing System",
      description: "Developed a reinforcement learning framework using DQN and A2C algorithms to optimize revenue and customer engagement with dynamic pricing strategies.",
      image: img3,
      tech: ["Python", "Reinforcement Learning", "DQN", "A2C"],
      github: "https://github.com/rutubhanderi/Dynamic_Pricing_Strategy",
      category: "Reinforcement Learning"
    },
    {
      title: "Parkinson's Disease Prediction",
      description: "Built a classification model to predict Parkinson's disease from medical features, achieving 87% accuracy with XGBoost.",
      image:img4,
      tech: ["Python", "XGBoost", "Random Forest", "Scikit-learn"],
      github: "https://github.com/rutubhanderi/ML-Projects",
      category: "Machine Learning"
    },
    {
      title: "Street Light Automation",
      description: "Arduino-based system using IR sensors and PWM for dynamic lighting based on vehicle presence, achieving up to 80% energy savings.",
      image: img5,
      tech: ["Arduino", "IR Sensors", "PWM", "C++"],
      github: "https://github.com/rutubhanderi/Arduino-Project",
      category: "IoT"
    },
    {
      title: "Report GenX",
      description: "Full-stack web app for an NGO to manage volunteer reports with role-based access control and comprehensive report management.",
      image: img6,
      tech: ["MERN Stack", "JWT", "RESTful API"],
      github: "https://github.com/rutubhanderi/Report-Generation-AP-S1",
      category: "Full Stack"
    }
  ];

  // Filter projects based on category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((el) => observer.observe(el));

    return () => {
      projectCards.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-900 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 rounded-full text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
            MY WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rutubhanderi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;