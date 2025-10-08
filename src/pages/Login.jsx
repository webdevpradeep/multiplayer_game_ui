import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { apiClient } from "../utils/apiClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await apiClient.login({ email, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-gray-400">Login to continue your adventure</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* input sec */}
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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
            <input type="checkbox" className="mr-2 w-4 h-4 accent-purple-500" />
            Remember me
          </label>
          <Link
            to="/forgotPassword"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Login
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="text-center text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/signUp"
          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
