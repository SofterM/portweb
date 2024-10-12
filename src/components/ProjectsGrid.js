import React, { useState } from 'react';

const ProjectCard = ({ project, handleImageClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLength = 100;
  const isLongDescription = project.description && project.description.length > descriptionLength;

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`group relative bg-gray-900/70 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl flex flex-col cursor-pointer`}
      onClick={() => handleImageClick(project)}
    >
      <div className="p-4 h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy" // Lazy load images
          className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80 rounded-lg shadow-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
        
        <div
          className={`text-sm sm:text-base text-gray-400 transition-all duration-300 ${
            isExpanded ? 'max-h-full' : 'max-h-12 overflow-hidden'
          }`}
        >
          {project.description}
        </div>

        {isLongDescription && (
          <button
            onClick={toggleExpand}
            aria-expanded={isExpanded} // Accessibility improvement
            className="text-blue-300 mt-2 text-sm self-start rounded-full border border-blue-500 px-3 py-1"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

const ProjectsGrid = ({ projects, handleImageClick }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main className="flex-grow py-8 sm:py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                handleImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Connect with us</h3>
              <p className="text-sm text-gray-400 mt-1">Join our community for updates and more!</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://discord.gg/QSxYZtv99X" className="footer-link text-sm" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
              <a href="https://mcmodels.net" className="footer-link text-sm" target="_blank" rel="noopener noreferrer">
                McModel
              </a>
              <a href="https://www.facebook.com/pratarokub" className="footer-link text-sm" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
            &copy; 2024 PAPER BAG All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsGrid;