import { useState } from 'react';
import {
  X,
  Trophy,
  Target,
  Zap,
  Award,
  Settings,
  LogOut,
  Crown,
  Home,
  Edit,
  Edit2Icon,
  Edit2,
  Camera,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { deleteCookie } from '../utils/cookies';
import { useGlobalContext } from '../context/globalContext';
import { useRef } from 'react';
import { apiClient } from '../utils/apiClient';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const { isLogin, setIsLogin, userProfile } = useGlobalContext();

  const navigate = useNavigate();

  console.log(userProfile, isLogin);

  const userStats = [
    {
      icon: Trophy,
      label: 'Total Wins',
      value: '1,247',
      color: 'text-yellow-400',
    },
    { icon: Target, label: 'Accuracy', value: '94.2%', color: 'text-blue-400' },
    { icon: Zap, label: 'Streak', value: '15 days', color: 'text-purple-400' },
    { icon: Award, label: 'Rank', value: 'Diamond', color: 'text-cyan-400' },
  ];

  const recentAchievements = [
    {
      name: 'Headshot Master',
      rarity: 'Legendary',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Perfect Game',
      rarity: 'Epic',
      color: 'from-purple-500 to-pink-500',
    },
    { name: 'Speed Demon', rarity: 'Rare', color: 'from-blue-500 to-cyan-500' },
  ];

  const uploadImageToServer = async (file) => {
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('profileImage', file);

      // Replace with your actual API endpoint
      await apiClient.uploadProfileImage({ image: profileImage });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Show preview immediately
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload to server
      uploadImageToServer(file);
    }
  };

  const handleEditPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleLogout = () => {
    deleteCookie('token');
    setIsLogin(false);
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-purple-500/20 animate-scale-in">
          {/* Header with Background img*/}
          <div className="relative h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop"
              alt="Gaming background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-purple-900/70 to-slate-900"></div>

            <Link
              to="/"
              title="Back to home page"
              className="absolute top-4 right-4 p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors backdrop-blur-sm z-10"
            >
              <Home size={20} />
            </Link>
          </div>

          {/* Profile Picture */}
          <div className="relative px-6 -mt-16 mb-4">
            <div className="inline-block relative group">
              <div className="w-28 h-28 rounded-full border-4 border-slate-900 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Crown size={48} className="text-yellow-300" />
                )}
              </div>
              <button
                onClick={handleEditPhoto}
                className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full border-4 border-slate-900 hover:bg-purple-700 transition-colors shadow-lg group-hover:scale-110 transform"
              >
                <Camera size={16} className="text-white" />
              </button>
              {/* <div className="absolute -bottom-1 -right-1 bg-green-500 w-7 h-7 rounded-full border-4 border-slate-900"></div> */}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* User Info */}
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white">
                {userProfile?.name || 'Gamer123'}
              </h2>
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold rounded text-white">
                PRO
              </span>
            </div>
            <p className="text-slate-400">Level 47 • Elite Warrior</p>
          </div>

          {/* Stats Grid */}
          <div className="px-6 mb-6">
            <div className="grid grid-cols-2 gap-3">
              {userStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                >
                  <stat.icon className={`${stat.color} mb-2`} size={20} />
                  <div className="text-slate-400 text-xs mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white font-bold text-lg">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="px-6 mb-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Award className="text-yellow-400" size={18} />
              Recent Achievements
            </h3>
            <div className="space-y-2">
              {recentAchievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      {achievement.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold`}
                    >
                      {achievement.rarity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 space-y-2">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2">
              <Settings size={18} />
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-3 bg-slate-800 text-slate-300 rounded-xl font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Profile;
