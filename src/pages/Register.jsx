import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartPulse,User,Mail,Lock,Eye,EyeOff,ArrowRight,ShieldCheck,CheckCircle2,} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.agreeTerms) {
      alert("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    localStorage.setItem(
      "healthnest-user",
      JSON.stringify({
        name: form.name,
        email: form.email,
      })
    );

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
    <div className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-white">
    
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"/>

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"/>


      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 lg:grid-cols-2">
         
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10">
              <Link to="/" className="mb-12 flex w-fit items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 shadow-lg backdrop-blur">
                  <HeartPulse size={26} strokeWidth={2.5} />
                </motion.div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-100">
                    Healthcare
                  </p>
                  <h1 className="text-2xl font-black">
                    Health<span className="text-cyan-100">Nest</span>
                  </h1>
                </div>
              </Link>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                  <ShieldCheck size={15} />
                  Join HealthNest
                </span>

                <h2 className="mt-6 max-w-lg text-4xl font-black leading-tight xl:text-5xl">
                  Start your journey{" "}
                  <span className="block text-cyan-100">to better health.</span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-emerald-50/90">
                  Create your HealthNest account and get easy access to trusted
                  doctors, appointments, medical reports, and personalized
                  healthcare.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Book appointments easily",
                    "Access medical reports",
                    "Connect with expert doctors",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-cyan-100"/>
                      <span className="text-sm font-semibold text-white/90">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm font-bold">Your health. Your journey.</p>
              <p className="mt-1 text-xs text-emerald-50/80">
                HealthNest makes healthcare simpler and more accessible.
              </p>
            </div>
          </div>

    
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-7 flex justify-center lg:hidden">
              <Link to="/" className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-lg">
                  <HeartPulse size={23} />
                </div>
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                    Healthcare
                  </p>
                  <h1 className="text-xl font-black">
                    Health<span className="text-emerald-500">Nest</span>
                  </h1>
                </div>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                Get started today
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Join HealthNest and manage your healthcare in one place.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"/>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"/>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"/>
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-emerald-500">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
          
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"/>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-emerald-500">
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={form.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-emerald-500"/>
                <span className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  I agree to the HealthNest{" "}
                  <button
                    type="button"
                    className="font-bold text-emerald-600 dark:text-emerald-400"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and Privacy Policy.
                </span>
              </label>
              <motion.button
                type="submit"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-5 py-3.5 text-sm font-black text-white shadow-xl shadow-emerald-500/20 transition hover:shadow-emerald-500/30">
                Create Account
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"/>
              </motion.button>
            </motion.form>

            
            <div className="mt-7 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-black text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400">
                  Sign in
                </Link>
              </p>
            </div>

          
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <ShieldCheck size={13} />
              Secure & Private
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}