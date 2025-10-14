import { ArrowRight, Eye, EyeOff, Lock, Mail, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { apiClient } from '../utils/apiClient';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiClient.forgotPassword({
        email,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Forgot Password?</h2>
        <p className="text-gray-400">
          No worries, we'll send you reset instructions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* input sec : EMAIL */}
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-hover:text-purple-300" />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            required
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Send Reset Link
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="text-center">
        <Link
          to="/login"
          className="text-purple-400 hover:text-purple-300 text-sm transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
