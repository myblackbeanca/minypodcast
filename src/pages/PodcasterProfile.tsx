import React from 'react';
import { useParams } from 'react-router-dom';
import { Crown, Play, Star, Users, Clock, Video, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const PodcasterProfile = () => {
  const { id } = useParams();
  
  // This would typically come from an API
  const podcaster = {
    id: '1',
    name: "Alex Rivers",
    podcast: "Tech Horizons Daily",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=400&h=400",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000",
    bio: "Tech enthusiast and visionary podcaster exploring the frontiers of technology and its impact on our future.",
    listeners: "2.5M",
    episodes: 156,
    subscription: "$9.99/month",
    minyPodcasts: [
      {
        title: "Future of AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=400",
        episode: "EP156",
        price: "$4.99"
      },
      {
        title: "Web3 Revolution",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400&h=400",
        episode: "EP155",
        price: "$4.99"
      },
      {
        title: "Tech Giants",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=400",
        episode: "EP154",
        price: "$4.99"
      }
    ],
    unboxingVideo: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=2000",
    relatedPodcasters: [
      {
        name: "Sarah Chen",
        podcast: "Mindful Moments",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        name: "David Kim",
        podcast: "Future Finance",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        name: "Rachel Foster",
        podcast: "Science Today",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${podcaster.name} - ${podcaster.podcast} | MINY`}
        description={podcaster.bio}
        image={podcaster.coverImage}
      />
      
      {/* Rest of the PodcasterProfile component remains exactly the same */}
      <div className="min-h-screen bg-gray-50">
        {/* Previous JSX content remains exactly the same */}
      </div>
    </>
  );
};

export default PodcasterProfile;