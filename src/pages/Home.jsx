import { useState } from "react";
import {
  Gamepad2,
  Search,
  TrendingUp,
  Star,
  Users,
  Play,
  Clock,
  Filter,
  Menu,
  X,
  Bell,
  User,
  ChevronRight,
  Flame,
  Trophy,
  Zap,
} from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Games", icon: Gamepad2 },
    { id: "trending", name: "Trending", icon: TrendingUp },
    { id: "new", name: "New Releases", icon: Zap },
    { id: "popular", name: "Popular", icon: Flame },
    { id: "multiplayer", name: "Multiplayer", icon: Users },
  ];

  const games = [
    {
      id: 1,
      title: "Cyber Legends",
      category: "Action RPG",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
      rating: 4.8,
      players: "2.5M",
      tags: ["trending", "multiplayer", "popular"],
      description: "Enter a futuristic world of cybernetic warriors",
    },
    {
      id: 2,
      title: "Mystic Realms",
      category: "Fantasy MMORPG",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      rating: 4.9,
      players: "5.2M",
      tags: ["popular", "multiplayer"],
      description: "Explore magical realms with friends",
    },
    {
      id: 3,
      title: "Speed Rivals",
      category: "Racing",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop",
      rating: 4.7,
      players: "1.8M",
      tags: ["trending", "multiplayer"],
      description: "High-octane racing action",
    },
    {
      id: 4,
      title: "Shadow Protocol",
      category: "Tactical Shooter",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      rating: 4.6,
      players: "3.1M",
      tags: ["new", "multiplayer", "popular"],
      description: "Strategic combat in the shadows",
    },
    {
      id: 5,
      title: "Dragon Quest Odyssey",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      rating: 4.9,
      players: "4.3M",
      tags: ["popular", "trending"],
      description: "Epic dragon hunting adventure",
    },
    {
      id: 6,
      title: "Neon Warfare",
      category: "Battle Royale",
      image:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&h=600&fit=crop",
      rating: 4.5,
      players: "6.7M",
      tags: ["new", "trending", "multiplayer"],
      description: "Last one standing wins",
    },
    {
      id: 7,
      title: "Space Odyssey 2077",
      category: "Sci-Fi Exploration",
      image:
        "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop",
      rating: 4.8,
      players: "2.9M",
      tags: ["new", "popular"],
      description: "Explore the infinite cosmos",
    },
    {
      id: 8,
      title: "Kingdom Warriors",
      category: "Strategy",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop",
      rating: 4.7,
      players: "1.5M",
      tags: ["multiplayer"],
      description: "Build your empire and conquer",
    },
  ];

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || game.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredGame = games[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className=" z-50 bg-gray-900/80 backdrop-blur-xl border-b border-purple-500/30 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 p-2 rounded-xl">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                GamePortal
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Library
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Community
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Store
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 animate-fadeIn">
              <nav className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                >
                  Library
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                >
                  Store
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Featured Game */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-r from-gray-900 via-purple-900/30 to-gray-900 border border-purple-500/30 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold">
                      <Flame className="w-4 h-4" />
                      FEATURED GAME
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white">
                      {featuredGame.title}
                    </h1>
                    <p className="text-gray-400 text-lg">
                      {featuredGame.description}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">
                          {featuredGame.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">
                          {featuredGame.players} Players
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs font-semibold">
                        {featuredGame.category}
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
                        <Play className="w-5 h-5" />
                        Play Now
                      </button>
                      <button className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20">
                        Learn More
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={featuredGame.image}
                      alt={featuredGame.title}
                      className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30"
                        : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-purple-500/20"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === "all"
                ? "All Games"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-400">{filteredGames.length} games</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-semibold">
                      {game.rating}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                      <Play className="w-5 h-5" />
                      Play Now
                    </button>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{game.category}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-cyan-400">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex gap-1">
                      {game.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <Gamepad2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No games found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </section>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
