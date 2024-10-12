import React, { useRef } from 'react';
import Thumbnail from './Thumbnail';
import { X } from 'lucide-react';

const Modal = ({
  selectedImage,
  selectedProject,
  selectedThumbnails,
  currentThumbnailIndex,
  closeModal,
  setSelectedImage,
  setCurrentThumbnailIndex,
  slideshowInterval,
  setSlideshowInterval
}) => {
  const thumbnailContainerRef = useRef(null);
  
  const handleThumbnailClick = (thumbnail, index) => {
    setSelectedImage(thumbnail.url);
    setCurrentThumbnailIndex(index);

    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % selectedThumbnails.length;
          setSelectedImage(selectedThumbnails[newIndex].url);
          return newIndex;
        });
      }, 3000);
      setSlideshowInterval(interval);
    }
  };

  // Mouse drag event handlers
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default drag behavior
    const startX = e.pageX - thumbnailContainerRef.current.offsetLeft;
    const scrollLeft = thumbnailContainerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - thumbnailContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // Scroll-fast
      thumbnailContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 backdrop-blur-sm overflow-hidden" onClick={closeModal}>
      <div 
        className="relative flex flex-col bg-gray-900 bg-opacity-90 rounded-xl w-full max-w-7xl max-h-[95vh] overflow-y-hidden shadow-2xl border border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-[1.02] scrollbar-hide" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">{selectedProject.title}</h2>
          <div className="flex justify-center items-center mb-6 h-[35vh] sm:h-[45vh] md:h-[55vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain rounded-lg max-h-full shadow-lg transition-transform duration-300 ease-in-out"
              style={{ transform: `scale(${selectedProject.imageScale})` }}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-center font-bold mb-4 text-base sm:text-lg text-gray-300">Album Photos</h3>
            <div 
              ref={thumbnailContainerRef} 
              className="flex overflow-x-auto scrollbar-hide space-x-2 cursor-grab" 
              onMouseDown={handleMouseDown}
              style={{ userSelect: 'none' }} // Prevent text selection
            >
              {selectedThumbnails.map((thumbnail, index) => (
                <Thumbnail
                  key={index}
                  thumbnail={thumbnail}
                  index={index}
                  currentThumbnailIndex={currentThumbnailIndex}
                  handleThumbnailClick={handleThumbnailClick}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          className="fixed top-4 right-4 bg-gray-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl group"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <X size={24} className="transform group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Modal;