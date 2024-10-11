import React from 'react';

const Thumbnail = ({ thumbnail, index, currentThumbnailIndex, handleThumbnailClick }) => (
  <div className="flex-shrink-0 p-1">
    <img
      src={thumbnail.url}
      alt={`Thumbnail ${index + 1}`}
      className={`w-48 h-48 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105 ${
        currentThumbnailIndex === index ? 'border-4 border-red-500' : 'border-2 border-transparent'
      } transition-all duration-300`}
      onClick={(e) => {
        e.stopPropagation();
        handleThumbnailClick(thumbnail, index);
      }}
    />
  </div>
);

export default Thumbnail;