
'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Adeus Life',
      category: 'Frontend',
      description: 'A digital legacy platform that enables users to create digital wills, store precious memories, manage accounts, and preserve photos for future generations. Features secure document storage and user-friendly interface for end-of-life planning.',
      image: 'https://static.readdy.ai/image/4ddd4ebf0302badd347866c16496ddd6/0de9269db49f402beffa7ca94cb62d45.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/adeuslife/adeus-frontend-development',
      demo: 'https://www.adeuslife.com/',
      private: true,
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A comprehensive e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%2C%20clean%20product%20catalog%20layout%2C%20shopping%20cart%20functionality%2C%20responsive%20design%2C%20professional%20web%20application%2C%20user-friendly%20interface%2C%20contemporary%20styling%2C%20online%20store%20dashboard&width=600&height=400&seq=ecommerce-proj&orientation=landscape',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      private: false,
    },
    {
      title: 'Task Management App',
      category: 'Frontend',
      description: 'A responsive task management application built with Angular and Material-UI. Features drag-and-drop functionality, real-time updates, and collaborative features.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%2C%20kanban%20board%20layout%2C%20project%20dashboard%2C%20productivity%20tool%20design%2C%20clean%20user%20interface%2C%20organized%20workspace%2C%20modern%20web%20app%20design%2C%20collaborative%20platform&width=600&height=400&seq=task-mgmt-proj&orientation=landscape',
      technologies: ['Angular', 'Material-UI', 'TypeScript'],
      github: '#',
      demo: '#',
      private: false,
    },
    {
      title: 'Real-Time Chat Application',
      category: 'Full Stack',
      description: 'A real-time messaging platform with features like group chats, file sharing, and video calls. Built using React, Node.js, and WebSocket technology.',
      image: 'https://readdy.ai/api/search-image?query=Real-time%20chat%20application%20interface%2C%20messaging%20platform%20design%2C%20communication%20app%20layout%2C%20modern%20chat%20interface%2C%20user-friendly%20messaging%20system%2C%20clean%20conversation%20design%2C%20social%20platform%20interface&width=600&height=400&seq=chat-app-proj&orientation=landscape',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
      private: false,
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Frontend',
      description: 'An interactive dashboard for data visualization and analytics. Built with Next.js and Chart.js, featuring real-time data updates and responsive charts.',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20interface%2C%20business%20intelligence%20visualization%2C%20charts%20and%20graphs%20display%2C%20modern%20dashboard%20design%2C%20data%20visualization%20platform%2C%20professional%20analytics%20interface%2C%20clean%20metrics%20display&width=600&height=400&seq=analytics-proj&orientation=landscape',
      technologies: ['Next.js', 'Chart.js', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      private: false,
    },
    {
      title: 'Cloud Infrastructure Automation',
      category: 'Backend',
      description: 'Automated deployment pipeline using AWS services. Includes CI/CD implementation, container orchestration, and monitoring solutions.',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20visualization%2C%20AWS%20services%20diagram%2C%20DevOps%20automation%20interface%2C%20server%20monitoring%20dashboard%2C%20cloud%20computing%20platform%2C%20technical%20infrastructure%20design%2C%20system%20architecture%20display&width=600&height=400&seq=cloud-infra-proj&orientation=landscape',
      technologies: ['AWS', 'Python', 'Docker', 'Kubernetes'],
      github: '#',
      demo: '#',
      private: false,
    },
    {
      title: 'API Gateway Service',
      category: 'Backend',
      description: 'A scalable API gateway built with Node.js and Express. Features include rate limiting, authentication, request routing, and comprehensive logging.',
      image: 'https://readdy.ai/api/search-image?query=API%20gateway%20architecture%20diagram%2C%20microservices%20visualization%2C%20backend%20system%20interface%2C%20technical%20documentation%20display%2C%20server%20architecture%20design%2C%20API%20management%20platform%2C%20system%20integration%20dashboard&width=600&height=400&seq=api-gateway-proj&orientation=landscape',
      technologies: ['Node.js', 'Express', 'Redis', 'MySQL'],
      github: '#',
      demo: '#',
      private: false,
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                { project.private && <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-github-line"></i>
                    </div>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-external-link-line"></i>
                    </div>
                    Demo
                  </a>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
