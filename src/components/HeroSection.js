import React from 'react';

const HeroSection = ({ profileImageUrl }) => (
  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden px-4 sm:px-6 md:px-8">
    {/* Main image */}
    <img
      src="https://media.discordapp.net/attachments/1156242072655896649/1294359147739086859/minecraft_title.png?ex=670ab964&is=670967e4&hm=37a6d6ed7f82127ab6c79fcf2645978482e982cc2d898b028770a07bfae876c6&=&format=webp&quality=lossless&width=1440&height=581"
      alt="Minecraft landscape"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    
    {/* Content container */}
    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Logo and text on the left */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end mt-auto">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-800 rounded-lg shadow-lg p-1 transition-transform transform hover:scale-105">
          <div className="w-full h-full bg-gradient-to-br from-black-600 to-white-500 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
            <img 
              src={profileImageUrl || "https://placehold.co/128x128"} 
              alt="Profile" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4 text-white bg-black bg-opacity-40 p-2 sm:p-3 md:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-wide">PAPER BAG</h2>
          <p className="text-xs sm:text-sm">Pixel art | GUI MAP MODEL</p>
        </div>
      </div>
      
      {/* Text on the right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white text-right">
        <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-wide bg-black bg-opacity-70 p-2 rounded-lg">Portfolio</h2>
      </div>
    </div>
    
    {/* White border */}
    <div className="absolute inset-2 sm:inset-3 md:inset-4  pointer-events-none rounded-lg" />
  </div>
);

export default HeroSection;