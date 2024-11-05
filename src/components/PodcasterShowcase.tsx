import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users } from 'lucide-react';
import { featuredPodcasters } from '../data/podcasters';

const PodcasterShowcase: React.FC = () => {
  return (
    <section id="featured-podcasters" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Podcasters on MINY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPodcasters.map((podcaster) => (
            <Link to={`/podcaster/${podcaster.id}`} key={podcaster.id} className="group">
              <div className="relative aspect-square mb-4">
                <div className="hexagon">
                  <img
                    src={podcaster.image}
                    alt={podcaster.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="hexagon-overlay group-hover:opacity-100">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Users className="h-3 w-3" />
                  {podcaster.listeners}
                </div>
              </div>
              <h3 className="font-bold text-center text-lg">{podcaster.name}</h3>
              <p className="text-sm text-gray-600 text-center">{podcaster.podcast}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcasterShowcase;