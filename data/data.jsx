import { Flame, Gamepad2, TrendingUp, Users, Zap } from 'lucide-react';

export const categoriesData = [
  { id: 'all', name: 'All Games', icon: Gamepad2 },
  { id: 'trending', name: 'Trending', icon: TrendingUp },
  { id: 'new', name: 'New Releases', icon: Zap },
  { id: 'popular', name: 'Popular', icon: Flame },
  { id: 'multiplayer', name: 'Multiplayer', icon: Users },
];

export const gameData = [
  {
    id: 1,
    title: 'Cyber Legends',
    category: 'Action RPG',
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
    rating: 4.8,
    players: '2.5M',
    tags: ['trending', 'multiplayer', 'popular'],
    description: 'Enter a futuristic world of cybernetic warriors',
  },
  {
    id: 2,
    title: 'Mystic Realms',
    category: 'Fantasy MMORPG',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    rating: 4.9,
    players: '5.2M',
    tags: ['popular', 'multiplayer'],
    description: 'Explore magical realms with friends',
  },
  {
    id: 3,
    title: 'Speed Rivals',
    category: 'Racing',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop',
    rating: 4.7,
    players: '1.8M',
    tags: ['trending', 'multiplayer'],
    description: 'High-octane racing action',
  },
  {
    id: 4,
    title: 'Shadow Protocol',
    category: 'Tactical Shooter',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    rating: 4.6,
    players: '3.1M',
    tags: ['new', 'multiplayer', 'popular'],
    description: 'Strategic combat in the shadows',
  },
  {
    id: 5,
    title: 'Dragon Quest Odyssey',
    category: 'Adventure',
    image:
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
    rating: 4.9,
    players: '4.3M',
    tags: ['popular', 'trending'],
    description: 'Epic dragon hunting adventure',
  },
  {
    id: 6,
    title: 'Neon Warfare',
    category: 'Battle Royale',
    image:
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&h=600&fit=crop',
    rating: 4.5,
    players: '6.7M',
    tags: ['new', 'trending', 'multiplayer'],
    description: 'Last one standing wins',
  },
  {
    id: 7,
    title: 'Space Odyssey 2077',
    category: 'Sci-Fi Exploration',
    image:
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop',
    rating: 4.8,
    players: '2.9M',
    tags: ['new', 'popular'],
    description: 'Explore the infinite cosmos',
  },
  {
    id: 8,
    title: 'Kingdom Warriors',
    category: 'Strategy',
    image:
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop',
    rating: 4.7,
    players: '1.5M',
    tags: ['multiplayer'],
    description: 'Build your empire and conquer',
  },
];
