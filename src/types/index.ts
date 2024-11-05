export interface Miny {
  id: string;
  title: string;
  image: string;
  episode: string;
  price: string;
}

export interface PodcasterData {
  id: string;
  name: string;
  podcast: string;
  image: string;
  listeners: string;
  bio: string;
  banner: string;
  minys: Miny[];
}

export interface TopPodcast {
  id: string;
  title: string;
  episode: string;
  image: string;
  podcaster: string;
  price: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}