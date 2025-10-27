import { Bell, Gamepad2, Menu, Plus, User, X } from 'lucide-react';
import { useState } from 'react';
import { useGlobalContext } from '../context/globalContext';
import { useLocation, useNavigate } from 'react-router';

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isLogin, userProfile } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  // const chooseRoute = isLogin ? "/profile" : "/login";

  const checkLogin = () => {
    if (!isLogin) {
      // Redirect programmatically
      navigate('/login', { state: { from: location }, replace: true });
    } else {
      // Redirect to profile if logged in
      navigate('/profile');
    }
  };

  return (
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
            <button
              onClick={checkLogin}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            {userProfile?.role === 'ADMIN' && (
              <button
                title="Add Game"
                onClick={() => (window.location.href = '/addGame')}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            )}

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
  );
};

export default MainHeader;
