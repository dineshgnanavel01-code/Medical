import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {HeartPulse,Mail,Lock,Eye,EyeOff,ArrowRight, ShieldCheck,Sparkles,} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }

  
    localStorage.setItem(
      "healthnest-auth",
      JSON.stringify({
        loggedIn: true,
        email: form.email,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 px-4 py-8 text-slate-100 flex items-center justify-center">
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl lg:grid-cols-12">
          <div className="relative hidden lg:col-span-5 lg:flex flex-col justify-between p-10 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border-r border-slate-800/80">
            <div>
            
              <Link to="/" className="flex items-center gap-3 w-fit group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-inner group-hover:bg-emerald-500/20 transition">
                  <HeartPulse size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Healthcare
                  </span>
                  <h1 className="text-xl font-black tracking-tight text-white">
                    Health<span className="text-emerald-400">Nest</span>
                  </h1>
                </div>
              </Link>

        
              <div className="mt-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-6">
                  <Sparkles size={13} />
                  <span>Trusted Healthcare</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-white leading-snug">
                  Your health deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">better care.</span>
                </h2>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  Connect with trusted doctors, manage appointments, access medical reports, and take control of your healthcare journey.
                </p>
              </div>

           
              <div className="mt-10 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Expert Doctors</h4>
                    <p className="text-xs text-slate-400">Professional care whenever you need it.</p>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="pt-8 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Secure & encrypted portal</span>
            </div>
          </div>

          
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 block leading-none">
                    Healthcare
                  </span>
                  <span className="text-base font-black tracking-tight text-white leading-tight">
                    Health<span className="text-emerald-400">Nest</span>
                  </span>
                </div>
              </Link>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">
                Welcome back
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sign in to HealthNest
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                Access your healthcare dashboard and appointments.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-3.5 pl-11 pr-4 text-sm font-medium text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"/>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-emerald-400 hover:underline" >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-3.5 pl-11 pr-12 text-sm font-medium text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"/>
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded border-slate-800 bg-slate-900 text-emerald-500 focus:ring-emerald-500/20 accent-emerald-500"/>
                <span className="text-sm text-slate-300">Remember me</span>
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-400 hover:to-teal-500">
                <span>Sign In</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}>
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
            </form>
            <div className="mt-8 text-center space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Secure Login
              </p>
              <p className="text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-emerald-400 hover:text-emerald-300 transition">
                  Create account
                </Link>
              </p>

              <div>
                <Link
                  to="/"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition" >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }} >
                    ←
                  </motion.span>
                  <span>Back to HealthNest</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}