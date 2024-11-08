import React from 'react';
import img from './assets/p3.jpg';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  BookOpen, 
  Trophy,
  Cpu,
  Database,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Report Generation Website",
      description: "Built a website for Akshar Paaul to generate and manage reports using React, Node, and Supabase.",
      tech: ["React", "Node", "Express", "PostgreSQL", "Supabase", "TailwindCSS"],
      github: "https://github.com/rutubhanderi/Report-Generation-AP-S1"
    },
    {
      title: "House Price Prediction",
      description: "Developed a Django-based website for House Price Prediction using Linear Regression.",
      tech: ["Python", "Django", "Machine Learning"],
      github: "https://github.com/rutubhanderi/House-Price-Prediction"
    },
    {
      title: "Real Estate Marketplace",
      description: "Created a marketplace for Real Estate using MERN stack and integrating GenAI.",
      tech: ["React", "Express", "MongoDB", "Node", "Firebase", "Supabase", "GenAI"],
      github: "https://github.com/rutubhanderi/real-estate-project"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Java", "C++"]
    },
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Django", "SQL", "Express"]
    },
    {
      category: "Tools",
      items: ["Git", "Linux"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Nav */}
      <nav className="bg-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-200">Rutu Bhanderi</span>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-400 hover:text-gray-50">About</a>
              <a href="#projects" className="text-gray-400 hover:text-gray-50">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-gray-50">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-gray-50">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-200 mb-4">
              Computer Science Student & Developer
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Passionate about building innovative applications and solving complex problems
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/rutubhanderi" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rutu-bhanderi-46a68a254" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rutu.bhanderi.07@gmail.com"
                className="p-2 rounded-full hover:bg-gray-700">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <Cpu className="mr-2" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                I'm a computer science student with a passion for building  
                innovative applications. I'm driven by a desire to solve complex problems 
                and create solutions that have a positive impact.
              </p>
              <p className="text-gray-400 mb-4">
                Throughout my academic journey, I've had the opportunity to work on a 
                variety of projects. These experiences have honed my skills in areas like data structures, algorithms, web development
                and machine learning.
              </p>
              <p className="text-gray-400 mb-4">
              In my free time, I enjoy like playing cricket and billiards. 
              I also have a passion for photography and love capturing the beauty of nature. 
              Additionally, I'm an avid reader and enjoy reading light novels and webtoons.
              </p>
              <p className="text-gray-400 mb-4">
                Beyond my technical expertise, I'm also a curious learner who's always 
                eager to expand my knowledge. I stay up-to-date with the latest industry 
                trends and technologies, and I enjoy collaborating with others to tackle 
                challenging problems. 
              </p>

            </div>
            <div className="flex items-center justify-center">
            <div className="flex justify-center">
  <img src={img} alt="Profile" className="rounded" style={{ width: '450px', height: '450px' }} />
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <Code2 className="mr-2" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-800 text-blue-200 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} className="text-blue-400 hover:text-blue-600 flex items-center">
                  <Github className="w-4 h-4 mr-1" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <Trophy className="mr-2" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <BookOpen className="mr-2" />
            Education
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-200">Bachelor of Technology in Computer Science</h3>
            <p className="text-gray-400">Symbiosis Institute of Technology • 2022 - 2026</p>
            <p className="mt-4 text-gray-300">
              Relevant Coursework: Data Structures, Algorithms, Database Systems, 
              Operating Systems, Web Development, Machine Learning, Mathematics, Computer Networks
            </p>
            <div className="mt-4">
              <span className="text-blue-400">Current CGPA: 7.8/10.0</span>
            </div>
          </div>
          <br />
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-200">Higher Secondary Education</h3>
            <p className="text-gray-400">Anandalaya • 2008 - 2022</p>
            <p className="mt-4 text-gray-300">
              Stream : PCM with Computer Science
            </p>
            <div className="mt-4 ">
              <span className="text-blue-400 ">Percentage 10th : 96.4%</span>
              <br />
              <span className="text-blue-400">Percentage 12th : 85%</span>
            </div>
          </div>
        </div>
      </div>
           {/* Achievements Section */}
<div id="achievements" className="py-16 bg-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
      <Trophy className="mr-2" />
      Achievements
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Achievement Item */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 font-semibold">Google Cloud Engineering Certification</p>
        <p className="text-gray-400 text-sm"> Enhancing skills in cloud infrastructure and solutions.</p>
      </div>
      
      {/* Achievement Item */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 font-semibold"> Research Paper</p>
        <p className="text-gray-400 text-sm">Published paper titled "Efficient Illumination: Arduino-Based Street Light Automation for Energy Savings" at ICETCI, Hyderabad, 2024.</p>
      </div>
    </div>
  </div>
</div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="mailto:rutu.bhanderi.07@gmail.com" 
              className="flex items-center text-gray-400 hover:text-blue-400">
              <Mail className="w-5 h-5 mr-2" />
              rutu.bhanderi.07@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rutu-bhanderi-46a68a254" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/rutubhanderi" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Rutu Bhanderi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;