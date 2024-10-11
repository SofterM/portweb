import React from 'react';

const HeroSection = ({ profileImageUrl }) => (
  <div className="relative mx-auto max-w-full h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden p-4">
    {/* Main image */}
    <img
      src="https://media.discordapp.net/attachments/1156242072655896649/1294359147739086859/minecraft_title.png?ex=670ab964&is=670967e4&hm=37a6d6ed7f82127ab6c79fcf2645978482e982cc2d898b028770a07bfae876c6&=&format=webp&quality=lossless&width=1440&height=581"
      alt="Minecraft landscape"
      className="absolute inset-0 w-full h-full object-cover"
    />
    
    {/* Content container */}
    <div className="absolute inset-0 flex flex-col justify-between">
      {/* Logo and text on the left */}
      <div className="absolute bottom-6 left-4 flex flex-col sm:flex-row items-start sm:items-end">
        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-purple-800 rounded-lg shadow-lg p-1 transition-transform transform hover:scale-105">
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-red-500 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
            <img 
              src={profileImageUrl || "https://placehold.co/128x128"} 
              alt="Profile" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4 text-white bg-black bg-opacity-40 p-4 rounded-lg">
          <h2 className="text-base sm:text-lg font-bold tracking-wide">PAPER BAG</h2>
          <p className="text-xs sm:text-sm">Pixel art GUI - ITEMS</p>
        </div>
      </div>
      
      {/* Text on the right */}
      <div className="absolute bottom-6 right-4 text-white text-right bg-black bg-opacity-70 p-4 rounded-lg">
        <h2 className="text-base sm:text-lg font-bold tracking-wide">Portfolio</h2>
        <p className="text-xs sm:text-sm">
          <span className="text-red-500 font-semibold">Beautifully crafted models for Minecraft.</span>
        </p>
      </div>
    </div>
    
    {/* White border */}
    <div className="absolute inset-0 border-4 border-purple-300 pointer-events-none rounded-lg" />
  </div>
);

export default HeroSection;