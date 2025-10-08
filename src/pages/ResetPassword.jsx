import { ArrowRight, Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Reset Password</h2>
        <p className="text-gray-400">Enter your new password below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* password sec */}

        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-hover:text-purple-300" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-12 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* <PasswordField
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={formData.confirmPassword}
        /> */}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Reset Password
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

export default ResetPassword;
