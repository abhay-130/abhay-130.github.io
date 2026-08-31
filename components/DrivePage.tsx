import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PauseIcon, PlayIcon } from './icons';

const DrivePage: React.FC = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(60);

  const youtubePlaylistId = "PLP0gYe4HLusA";

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(Math.floor(Math.random() * 5) + 58);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black text-white font-poppins select-none z-50">
      
      {/* 1. BACKGROUND LANDSCAPE - EDGES STRETCHED CLEANLY */}
      <div className="absolute inset-0 z-0">
        <img
          src="/drive-landscape-bg.png"
          alt="Drive Landscape"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* 2. TOP-LEFT LOGO & EXIT BUTTON */}
      <div className="absolute top-6 left-6 z-30">
        <button
          onClick={() => navigate('/')}
          className="w-11 h-11 rounded-full bg-black/70 hover:bg-theme-red border border-white/20 text-white flex items-center justify-center font-bold shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          title="Exit Drive"
        >
          <span className="text-theme-red font-black text-xl group-hover:text-white transition-colors">⨁</span>
        </button>
      </div>

      {/* 3. RED MUSTANG CAR - PERFECTLY PROPORTIONED ON ROAD */}
      <div className="absolute bottom-[21.5%] left-[8%] sm:left-[12%] md:left-[15%] z-10 pointer-events-none">
        <img
          src="/mustang.png"
          alt="Mustang"
          className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[440px] xl:w-[480px] object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* 4. DASHCAM / SPEEDOMETER MUSIC PLAYER (BOTTOM CENTER) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div 
          onClick={() => setIsPlaying(!isPlaying)}
          className="cursor-pointer group flex items-center gap-3.5 px-4 py-2 rounded-full bg-black/85 backdrop-blur-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105 hover:border-white/40"
        >
          {/* Lens Graphic */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-900 to-slate-950 border border-cyan-400/50 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 blur-[0.5px]" />
            </div>
            <span className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-full border border-black ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`} />
          </div>

          {/* Speed & Track Info */}
          <div className="flex flex-col text-left font-mono">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-white">
                {speed} km/h
              </span>
              <span className="text-[10px] text-gray-400">• 13 km</span>
            </div>
            
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-gray-500'}`} />
              <span className="text-[10px] font-sans text-gray-300 truncate max-w-[130px] sm:max-w-[170px]">
                {isPlaying ? 'Cruising Radio On' : 'Tap to Play Music'}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="ml-1 w-8 h-8 rounded-full bg-white/10 hover:bg-theme-red text-white flex items-center justify-center font-bold text-xs transition-colors shrink-0"
          >
            {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 5. HIDDEN AUDIO IFRAME */}
      <iframe
        className={`fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-none ${isPlaying ? 'block' : 'hidden'}`}
        src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylistId}&autoplay=${isPlaying ? 1 : 0}&enablejsapi=1`}
        title="Drive Playlist"
        allow="autoplay"
      />

    </div>
  );
};

export default DrivePage;
