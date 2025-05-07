import React, { useEffect, useState } from 'react';

import profile from  '../assets/images/profile.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

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

    const hiddenElements = document.querySelectorAll('.about-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-primary transition-colors duration-300 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30 dark:from-dark-primary dark:via-dark-secondary/50 dark:to-dark-primary transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-tech-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-conic from-primary-100/40 via-transparent to-transparent dark:from-dark-accent/10 dark:via-transparent dark:to-transparent opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-conic from-secondary-100/40 via-transparent to-transparent dark:from-dark-highlight/10 dark:via-transparent dark:to-transparent opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-dark-accent dark:bg-opacity-20 rounded-full text-primary-600 dark:text-dark-highlight text-sm font-medium mb-4 animate-fade-in">
            DISCOVER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4 animate-slide-up">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-dark-muted max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-dark-accent dark:to-dark-highlight mx-auto mt-4 animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Profile image with decorative elements */}
          <div className="lg:w-1/3 about-hidden" style={{ opacity: 0, transitionDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary-500 dark:border-dark-accent rounded-lg opacity-50 z-0 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-secondary-500 dark:border-dark-highlight rounded-lg opacity-50 z-0 animate-float" style={{ animationDelay: '1s' }}></div>

              {/* Profile image */}
              <div className="relative z-10 bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 dark:from-dark-accent/10 dark:to-dark-highlight/10 z-0"></div>
                
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10"
                />

                {/* Overlay with social links */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex justify-center space-x-4">
                  <a href="https://github.com/rutubhanderi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 dark:hover:text-dark-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/rutu-bhanderi-46a68a254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 dark:hover:text-dark-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-all duration-300 border border-secondary-100 dark:border-dark-highlight/20 hover:shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-dark-highlight dark:to-secondary-500 bg-clip-text text-transparent">6+</div>
                <div className="text-sm text-gray-600 dark:text-dark-muted">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Content area with tabs */}
          <div className="lg:w-2/3">
            {/* Tab navigation */}
            <div className="flex border-b border-gray-200 dark:border-dark-border mb-8 about-hidden bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm p-1 rounded-t-lg" style={{ opacity: 0, transitionDelay: '0.3s' }}>
              <button
                className={`px-4 py-2 font-medium text-sm focus:outline-none rounded-t-md transition-all duration-300 ${
                  activeTab === 'about'
                    ? 'text-primary-600 dark:text-dark-accent bg-white dark:bg-dark-card shadow-sm'
                    : 'text-gray-500 dark:text-dark-muted hover:text-primary-600 dark:hover:text-dark-accent hover:bg-white/50 dark:hover:bg-dark-card/50'
                }`}
                onClick={() => setActiveTab('about')}
              >
                About Me
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm focus:outline-none rounded-t-md transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'text-primary-600 dark:text-dark-accent bg-white dark:bg-dark-card shadow-sm'
                    : 'text-gray-500 dark:text-dark-muted hover:text-primary-600 dark:hover:text-dark-accent hover:bg-white/50 dark:hover:bg-dark-card/50'
                }`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm focus:outline-none rounded-t-md transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'text-primary-600 dark:text-dark-accent bg-white dark:bg-dark-card shadow-sm'
                    : 'text-gray-500 dark:text-dark-muted hover:text-primary-600 dark:hover:text-dark-accent hover:bg-white/50 dark:hover:bg-dark-card/50'
                }`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>

            {/* Tab content */}
            <div className="about-hidden" style={{ opacity: 0, transitionDelay: '0.4s' }}>
              {/* About tab */}
              <div className={`${activeTab === 'about' ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-dark-accent/20 flex items-center justify-center text-primary-500 dark:text-dark-accent mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Who I Am
                </h3>
                <p className="text-lg text-gray-700 dark:text-dark-muted mb-6 leading-relaxed">
                  I'm Rutu Bhanderi, a passionate Computer Science Engineering student at Symbiosis Institute of Technology, Pune. I'm dedicated to developing innovative solutions with a strong foundation in both frontend and backend technologies.
                </p>
                <p className="text-lg text-gray-700 dark:text-dark-muted mb-6 leading-relaxed">
                  My journey in software development began with a curiosity about how technology can solve real-world problems. This evolved into a passion for creating elegant solutions using AI, machine learning, and web development. I'm constantly learning and exploring new technologies to expand my skill set.
                </p>
                <p className="text-lg text-gray-700 dark:text-dark-muted mb-6 leading-relaxed">
                  I've worked on various projects ranging from Network Intrusion Detection Systems to Dynamic Pricing using Reinforcement Learning. I enjoy the challenge of tackling complex problems and turning data into actionable insights.
                </p>

                {/* Key skills */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Key Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Machine Learning', 'FastAPI', 'MongoDB', 'MySQL', 'Data Analysis'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 dark:bg-dark-secondary text-primary-600 dark:text-dark-highlight text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education tab */}
              <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-dark-accent/20 flex items-center justify-center text-secondary-500 dark:text-dark-accent mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  Education
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-secondary-500 dark:border-dark-highlight hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-dark-text">B. Tech in Computer Science Engineering</h4>
                        <p className="text-gray-600 dark:text-dark-muted">Symbiosis Institute of Technology, Pune</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary-100/80 dark:bg-dark-secondary/80 text-secondary-600 dark:text-dark-highlight text-sm rounded-full backdrop-blur-sm">
                        Expected 2026
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-dark-muted">
                        CGPA: 7.85. Coursework includes Data Structures and Algorithms, OOPS, Computer Networks, Operating Systems, Databases, and more.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-secondary-500 dark:border-dark-highlight hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-dark-text">Higher Secondary Education</h4>
                        <p className="text-gray-600 dark:text-dark-muted">Anandalaya School</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary-100/80 dark:bg-dark-secondary/80 text-secondary-600 dark:text-dark-highlight text-sm rounded-full backdrop-blur-sm">
                        2022
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-dark-muted">
                        Stream: PCM with Computer Science. 10th Board: 96.4% | 12th Board: 85%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills tab */}
              <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-accent-100 dark:bg-dark-accent/20 flex items-center justify-center text-accent-500 dark:text-dark-accent mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Technical Skills
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'JavaScript', 'C++', 'HTML', 'CSS', 'MySQL'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-50 dark:bg-dark-secondary text-primary-600 dark:text-dark-highlight text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-3">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {['FastAPI', 'Flask', 'React.js', 'Node.js', 'Express.js', 'Scikit-learn', 'Pandas', 'XGBoost', 'Chart.js', 'jsPDF'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary-50 dark:bg-dark-secondary text-secondary-600 dark:text-dark-highlight text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-3">Databases & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'MySQL', 'Supabase', 'Firebase', 'Git', 'Postman', 'Arduino IDE', 'Power BI', 'Excel', 'JWT'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-accent-50 dark:bg-dark-secondary text-accent-600 dark:text-dark-highlight text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;