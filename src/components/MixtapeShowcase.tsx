import React from 'react';
import { Play, Crown, Headphones } from 'lucide-react';
import { topPodcasts } from '../data/podcasters';

const MixtapeShowcase: React.FC = () => {
  return (
    <section id="top-podcasts" className="relative py-20 bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-white">Top MINY Podcasts</h2>
          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
            <Crown className="h-5 w-5" />
            View All Podcasts
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPodcasts.map((podcast) => (
            <div key={podcast.id} className="group">
              <div className="relative aspect-square mb-4">
                <div className="hexagon">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="hexagon-overlay group-hover:opacity-100">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Headphones className="h-3 w-3" />
                  Premium
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white text-lg">{podcast.title}</h3>
                <p className="text-sm text-gray-400">{podcast.episode}</p>
                <p className="text-purple-400 mt-2">{podcast.price}</p>
                <button className="mt-3 w-full bg-purple-600/20 text-purple-400 border border-purple-600/30 py-2 rounded-full hover:bg-purple-600/30 transition">
                  Claim MINY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MixtapeShowcase;