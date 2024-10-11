import React from 'react';

const HeroSection = ({ profileImageUrl }) => (
  <div className="relative mx-auto max-w-full h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden" style={{ padding: '10px 10px' }}> {/* Full width with 10px padding */}
    {/* Main image */}
    <img
      src="https://media.discordapp.net/attachments/1156242072655896649/1294359147739086859/minecraft_title.png?ex=670ab964&is=670967e4&hm=37a6d6ed7f82127ab6c79fcf2645978482e982cc2d898b028770a07bfae876c6&=&format=webp&quality=lossless&width=1440&height=581"
      alt="Minecraft landscape"
      className="absolute inset-0 w-full h-full object-cover" // Ensures full coverage
    />
    
    {/* Logo and text on the left */}
    <div className="absolute bottom-6 left-4 flex items-end flex-col sm:flex-row">
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-purple-800 rounded-lg shadow-lg p-1 transition-transform transform hover:scale-105">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-red-500 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
          <img 
            src={profileImageUrl || "https://placehold.co/128x128"} 
            alt="Profile" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="ml-2 sm:ml-4 text-white text-center sm:text-left bg-black bg-opacity-40 p-4 rounded-lg">
        <h2 className="text-lg sm:text-xl font-bold tracking-wide">PAPER BAG</h2>
        <p className="text-sm sm:text-base">Pixel art GUI - ITEMS</p>
      </div>
    </div>
    
    {/* Text on the right */}
    <div className="absolute bottom-6 right-4 text-white text-center sm:text-right bg-black bg-opacity-70 p-4 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold tracking-wide">Portfolio</h2>
      <p className="text-sm sm:text-base">
         <span className="text-red-500 font-semibold">Beautifully crafted models for Minecraft.</span>
      </p>
    </div>
    
    {/* White border */}
    <div className="absolute inset-0 border-4 border-purple-300 pointer-events-none rounded-lg" />
  </div>
);

export default HeroSection;