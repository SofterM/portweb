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
      className={`group relative bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl flex flex-col cursor-pointer`}
      onClick={() => handleImageClick(project)}
    >
      <div className="p-4 h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80 rounded-lg shadow-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        
        <div
          className={`text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-all duration-300 ${
            isExpanded ? 'max-h-full' : 'max-h-12 overflow-hidden'
          }`}
        >
          {project.description}
        </div>

        {isLongDescription && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 dark:text-blue-300 mt-2 text-sm self-start rounded-full border border-blue-500 px-3 py-1"
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
    <section className="py-8 sm:py-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">
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

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>Connect with us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://discord.gg/YOUR_DISCORD_LINK" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://www.mcmodel.com" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">McModel</a>
            <a href="https://www.facebook.com" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ProjectsGrid;