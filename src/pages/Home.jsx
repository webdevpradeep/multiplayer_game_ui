import { useState } from 'react';
import {
  Gamepad2,
  Search,
  TrendingUp,
  Star,
  Users,
  Play,
  ChevronRight,
  Flame,
  Zap,
} from 'lucide-react';
import MainHeader from '../componenets/MainHeader';
import { categoriesData, gameData } from '../data/data';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = categoriesData;

  const games = gameData;

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || game.tags.includes(selectedCategory);
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

      <MainHeader />

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
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-purple-500/20'
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
              {selectedCategory === 'all'
                ? 'All Games'
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
    </div>
  );
};

export default Home;
