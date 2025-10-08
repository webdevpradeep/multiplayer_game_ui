import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Gamepad2,
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function GamingAuth() {
  const [currentPage, setCurrentPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", currentPage, formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const InputField = ({ icon: Icon, type, name, placeholder, value }) => (
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-hover:text-purple-300" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        required
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );

  const PasswordField = ({ name, placeholder, value }) => (
    <div className="relative group">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-hover:text-purple-300" />
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
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
  );

  const LoginPage = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-gray-400">Login to continue your adventure</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          icon={Mail}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <PasswordField
          name="password"
          placeholder="Password"
          value={formData.password}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
            <input type="checkbox" className="mr-2 w-4 h-4 accent-purple-500" />
            Remember me
          </label>
          <button
            type="button"
            onClick={() => setCurrentPage("forgot")}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Forgot Password?
          </button>
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
        <button
          onClick={() => setCurrentPage("signup")}
          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );

  const SignupPage = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Join the Game</h2>
        <p className="text-gray-400">Create your account and start playing</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          icon={User}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
        />
        <InputField
          icon={Mail}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <PasswordField
          name="password"
          placeholder="Password"
          value={formData.password}
        />
        <PasswordField
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
        />

        <label className="flex items-start text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
          <input
            type="checkbox"
            className="mr-2 mt-1 w-4 h-4 accent-purple-500"
            required
          />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Create Account
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="text-center text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => setCurrentPage("login")}
          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );

  const ForgotPasswordPage = () => (
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
        <InputField
          icon={Mail}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Send Reset Link
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="text-center">
        <button
          onClick={() => setCurrentPage("login")}
          className="text-purple-400 hover:text-purple-300 text-sm transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Login
        </button>
      </div>
    </div>
  );

  const ResetPasswordPage = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Reset Password</h2>
        <p className="text-gray-400">Enter your new password below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordField
          name="password"
          placeholder="New Password"
          value={formData.password}
        />
        <PasswordField
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={formData.confirmPassword}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3.5 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          Reset Password
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="text-center">
        <button
          onClick={() => setCurrentPage("login")}
          className="text-purple-400 hover:text-purple-300 text-sm transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Login
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation tabs for demo */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full p-1 flex gap-1 shadow-lg border border-purple-500/30 z-10">
        {["login", "signup", "forgot", "reset"].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentPage === page
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 p-8 relative overflow-hidden">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 p-4 rounded-2xl">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="relative z-10">
            {currentPage === "login" && <LoginPage />}
            {currentPage === "signup" && <SignupPage />}
            {currentPage === "forgot" && <ForgotPasswordPage />}
            {currentPage === "reset" && <ResetPasswordPage />}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Gaming Portal. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
      `}</style>
    </div>
  );
}
