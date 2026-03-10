import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import oceanBg from "@/assets/ocean-bg.jpg";
import hituLogo from "@/assets/hitu-logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={oceanBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover animate-bg-float"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-dark/50 to-navy-deep/70" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-ice/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-6 animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <img
            src={hituLogo}
            alt="HITU(MBI) Logo"
            className="w-28 h-28 mb-4 animate-float drop-shadow-2xl"
          />
          <h1 className="text-4xl font-bold font-display tracking-wider text-foreground">
            HITU(MBI)
          </h1>
          <p className="text-ice text-lg mt-1 font-display tracking-wide">
            Vigilant authority, Mission integrity
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="glass-input rounded-lg flex items-center px-4 py-3 glow-border focus-within:border-primary/50 transition-colors">
            <User className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground font-body"
            />
          </div>

          <div className="glass-input rounded-lg flex items-center px-4 py-3 glow-border focus-within:border-primary/50 transition-colors">
            <Lock className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground font-body"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground transition-colors ml-2"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <button
            type="submit"
            className="login-btn w-full py-3.5 rounded-lg text-primary-foreground font-display font-semibold text-lg tracking-wider animate-pulse-glow"
          >
            Log In
          </button>

          <div className="flex justify-between text-sm text-ice/70">
            <button type="button" className="hover:text-ice transition-colors">
              Forgot password?
            </button>
            <button type="button" className="hover:text-ice transition-colors">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
