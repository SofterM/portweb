import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import Modal from './components/Modal';
import { projects } from './data/projects';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedThumbnails, setSelectedThumbnails] = useState([]);
  const [selectedProject, setSelectedProject] = useState({ title: '', description: '', imageScale: 1 });
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [slideshowInterval, setSlideshowInterval] = useState(null);

  const handleImageClick = (project) => {
    setSelectedImage(project.thumbnails[0].url);
    setSelectedThumbnails(project.thumbnails);
    setSelectedProject({ title: project.title, description: project.description, imageScale: project.imageScale });
    setCurrentThumbnailIndex(0);
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setCurrentThumbnailIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % project.thumbnails.length;
        setSelectedImage(project.thumbnails[newIndex].url);
        return newIndex;
      });
    }, 3000);
    setSlideshowInterval(interval);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedThumbnails([]);
    setSelectedProject({ title: '', description: '', imageScale: 1 });
    setCurrentThumbnailIndex(0);
    document.body.style.overflow = '';

    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      setSlideshowInterval(null);
    }
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      if (slideshowInterval) {
        clearInterval(slideshowInterval);
      }
    };
  }, [slideshowInterval]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <HeroSection profileImageUrl="https://i.ibb.co/Z68kpmS/logo.png" /> {/* Update the URL */}
      <ProjectsGrid projects={projects} handleImageClick={handleImageClick} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          selectedProject={selectedProject}
          selectedThumbnails={selectedThumbnails}
          currentThumbnailIndex={currentThumbnailIndex}
          closeModal={closeModal}
          setSelectedImage={setSelectedImage}
          setCurrentThumbnailIndex={setCurrentThumbnailIndex}
          slideshowInterval={slideshowInterval}
          setSlideshowInterval={setSlideshowInterval}
        />
      )}
    </div>
  );
}

export default App;
