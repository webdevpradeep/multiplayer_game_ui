import { useState } from 'react';
import { Upload, Gamepad2, Users, Check, X, ArrowLeft } from 'lucide-react';
import { apiClient } from '../utils/apiClient';

const AddGame = () => {
  const [formData, setFormData] = useState({
    name: '',
    maxPlayer: '',
    minPlayer: '',
    // thumbnail: null,
  });
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      setFormData({ ...formData, thumbnail: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        minPlayer: '',
        maxPlayer: '',
        // thumbnail: null,
      });
      setPreview(null);
    }, 2000);

    try {
      const data = await apiClient.addGame(formData);
      console.log('Game added successfully:', data);
    } catch (error) {
      console.log('Error adding game:', error);
    }
  };

  const isFormValid =
    formData.name &&
    formData.minPlayer &&
    formData.maxPlayer &&
    formData.thumbnail;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Button */}
        <button
          onClick={() => (window.location.href = '/')}
          className="group flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mb-4 shadow-lg shadow-purple-500/50">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Add New Game
          </h1>
          <p className="text-purple-300 text-lg">
            Upload your game details to the platform
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          <div className="p-6 md:p-10">
            {/* Thumbnail Upload */}
            <div className="mb-8">
              <label className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wide">
                Game Thumbnail
              </label>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl transition-all duration-300 overflow-hidden ${
                  isDragging
                    ? 'border-purple-400 bg-purple-500/20 scale-105'
                    : preview
                    ? 'border-purple-500/50 bg-purple-500/10'
                    : 'border-white/30 bg-white/5 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
              >
                {preview ? (
                  <div className="relative group">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPreview(null);
                          setFormData({ ...formData, thumbnail: null });
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <input
                      type="file"
                      id="thumbnail"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <label htmlFor="thumbnail" className="cursor-pointer block">
                      <Upload className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                      <p className="text-white font-medium mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-purple-300 text-sm">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Game Name */}
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wide"
              >
                Game Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter game name"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Player Count */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label
                  htmlFor="minPlayer"
                  className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Min Players
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <input
                    type="number"
                    id="minPlayer"
                    min="1"
                    value={formData.minPlayer}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        minPlayer: e.target.value * 1,
                      })
                    }
                    placeholder="1"
                    className="w-full pl-12 pr-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="maxPlayer"
                  className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Max Players
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <input
                    type="number"
                    id="maxPlayer"
                    min="1"
                    value={formData.maxPlayer}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maxPlayer: e.target.value * 1,
                      })
                    }
                    placeholder="10"
                    className="w-full pl-12 pr-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                isFormValid
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {showSuccess ? (
                <span className="flex items-center justify-center">
                  <Check className="w-6 h-6 mr-2" />
                  Game Added Successfully!
                </span>
              ) : (
                'Add Game'
              )}
            </button>
          </div>
        </form>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-purple-400 text-3xl font-bold mb-1">1</div>
            <div className="text-white text-sm">Upload Thumbnail</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-purple-400 text-3xl font-bold mb-1">2</div>
            <div className="text-white text-sm">Fill Game Details</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-purple-400 text-3xl font-bold mb-1">3</div>
            <div className="text-white text-sm">Publish Game</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
