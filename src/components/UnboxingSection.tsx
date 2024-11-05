import React from 'react';
import { Play, Share2 } from 'lucide-react';

const UnboxingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MINY Unboxing Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how collectors unbox their exclusive MINY podcast moments and join the community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1920"
              alt="MINY Unboxing Preview"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-full transition-transform duration-300 transform hover:scale-110">
                <Play className="h-12 w-12" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                First Look: Joe Rogan Experience MINY Collection
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Featured Unboxing</span>
                <button className="flex items-center gap-2 text-purple-300 hover:text-purple-200">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnboxingSection;