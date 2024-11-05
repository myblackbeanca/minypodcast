import { PodcasterData, TopPodcast, BlogPost } from '../types';

export const featuredPodcasters: PodcasterData[] = [
  {
    id: 'joe-rogan',
    name: 'Joe Rogan',
    podcast: 'The Joe Rogan Experience',
    image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&q=80&w=800&h=800',
    listeners: '11M',
    bio: 'Stand-up comedian, UFC commentator, and one of the world\'s most influential podcast hosts.',
    banner: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000',
    minys: [
      {
        id: 'jre-1',
        title: 'Elon Musk on AI Future',
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800',
        episode: 'EP2054',
        price: '$4.99'
      },
      {
        id: 'jre-2',
        title: 'Mike Tyson Stories',
        image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=800',
        episode: 'EP2048',
        price: '$4.99'
      },
      {
        id: 'jre-3',
        title: 'Comedy Store Legends',
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=800',
        episode: 'EP2042',
        price: '$4.99'
      }
    ]
  },
  {
    id: 'lex-fridman',
    name: 'Lex Fridman',
    podcast: 'Lex Fridman Podcast',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800&h=800',
    listeners: '4.2M',
    bio: 'AI researcher and podcast host exploring deep conversations about science, technology, and the nature of intelligence.',
    banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    minys: [
      {
        id: 'lex-1',
        title: 'Deep Learning Revolution',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        episode: 'EP366',
        price: '$4.99'
      },
      {
        id: 'lex-2',
        title: 'Future of Robotics',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
        episode: 'EP362',
        price: '$4.99'
      },
      {
        id: 'lex-3',
        title: 'Consciousness & AI',
        image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800',
        episode: 'EP358',
        price: '$4.99'
      }
    ]
  },
  {
    id: 'alex-cooper',
    name: 'Alex Cooper',
    podcast: 'Call Her Daddy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=800',
    listeners: '2.8M',
    bio: 'Revolutionizing the female podcast space with raw conversations about relationships and empowerment.',
    banner: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&q=80&w=2000',
    minys: [
      {
        id: 'chd-1',
        title: 'Dating in 2024',
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800',
        episode: 'EP248',
        price: '$4.99'
      },
      {
        id: 'chd-2',
        title: 'Relationship Advice',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
        episode: 'EP244',
        price: '$4.99'
      },
      {
        id: 'chd-3',
        title: 'Self-Love Journey',
        image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=800',
        episode: 'EP240',
        price: '$4.99'
      }
    ]
  }
];

export const topPodcasts: TopPodcast[] = [
  {
    id: 'future-tech',
    title: 'Future of Technology',
    episode: 'EP156',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=800',
    podcaster: 'Lex Fridman',
    price: '$4.99'
  },
  {
    id: 'mindful-living',
    title: 'Mindful Living',
    episode: 'EP89',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800&h=800',
    podcaster: 'Sarah Chen',
    price: '$4.99'
  },
  {
    id: 'startup-stories',
    title: 'Startup Stories',
    episode: 'EP234',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=800',
    podcaster: 'Steven Bartlett',
    price: '$4.99'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'future-podcasting',
    title: 'The Future of Podcasting: NFTs and Digital Collectibles',
    excerpt: 'Discover how blockchain technology is revolutionizing the podcasting industry through unique digital collectibles.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Chen',
    date: '2024-03-15'
  },
  {
    id: 'community-building',
    title: 'Building Strong Podcast Communities Through Digital Engagement',
    excerpt: 'Learn how podcasters are using MINY to create deeper connections with their audience.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
    author: 'Mark Thompson',
    date: '2024-03-12'
  },
  {
    id: 'monetization-strategies',
    title: 'New Monetization Strategies for Podcast Creators',
    excerpt: 'Explore innovative ways podcasters are generating revenue through digital collectibles and exclusive content.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    author: 'Lisa Rodriguez',
    date: '2024-03-10'
  }
];