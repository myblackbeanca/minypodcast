import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Play, Share2, Users, ArrowRight } from 'lucide-react';
import { featuredPodcasters } from '../data/podcasters';
import type { PodcasterData } from '../types';

const PodcasterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const podcaster = featuredPodcasters.find(p => p.id === id) as PodcasterData;
  const relatedPodcasters = featuredPodcasters.filter(p => p.id !== id).slice(0, 2);

  if (!podcaster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Podcaster not found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${podcaster.name} - ${podcaster.podcast} | MINY`}</title>
        <meta name="description" content={`Discover and collect unique podcast moments from ${podcaster.name} on MINY.`} />
      </Helmet>

      {/* Banner */}
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${podcaster.banner})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-6 pb-8">
            <div className="flex items-center space-x-6">
              <div className="w-40 h-40 relative">
                <img 
                  src={podcaster.image} 
                  alt={podcaster.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{podcaster.name}</h1>
                  <div className="flex items-center gap-1 bg-purple-600/50 px-3 py-1 rounded-full">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{podcaster.listeners} listeners</span>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-4">{podcaster.podcast}</p>
                <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition">
                  Subscribe to MINY Exclusives
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Bio */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-600">{podcaster.bio}</p>
        </div>

        {/* MINY Collection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">MINY Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcaster.minys.map(miny => (
              <div key={miny.id} className="group">
                <div className="relative aspect-square mb-4">
                  <div className="hexagon">
                    <img
                      src={miny.image}
                      alt={miny.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="hexagon-overlay group-hover:opacity-100">
                      <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                    <span>{miny.episode}</span>
                  </div>
                </div>
                <h3 className="font-bold text-center text-lg mb-2">{miny.title}</h3>
                <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                  Claim MINY - {miny.price}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Unboxing Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Unboxing</h2>
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
                {podcaster.name} MINY Collection Unboxing
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
        </section>

        {/* Related Podcasters */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Related Podcasters</h2>
            <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPodcasters.map(related => (
              <Link to={`/podcaster/${related.id}`} key={related.id} className="group">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="relative w-24 h-24">
                    <div className="hexagon">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{related.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{related.podcast}</p>
                    <div className="flex items-center gap-1 text-purple-600 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{related.listeners} listeners</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PodcasterPage;