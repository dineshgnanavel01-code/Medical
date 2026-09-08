import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  HeartPulse,
} from "lucide-react";

const columnVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const quickLinks = [
  ["Home", "/"],
  ["Doctors", "/doctors"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Reports", "/reports"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "General Consultation",
  "Specialist Care",
  "Emergency Care",
  "Health Checkups",
  "Online Consultation",
  "Diagnostic Services",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
 
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-full px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
        
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to="/" className="group mb-5 flex w-fit items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25"
              >
                
                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/30 blur-sm"
                  animate={{ left: ["-30%", "130%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <HeartPulse size={23} strokeWidth={2.5} className="relative z-10" />
              </motion.div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Healthcare
                </p>
                <h2 className="text-xl font-black tracking-tight text-white">
                  Health<span className="text-emerald-400">Nest</span>
                </h2>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Making quality healthcare accessible, simple, and convenient for everyone.
            </p>

            <motion.div
              whileHover={{ scale: 1.03, x: 4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-400"
            >
              <HeartPulse size={14} className="text-emerald-400" />
              Your health, our priority
            </motion.div>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {quickLinks.map(([text, path]) => (
                <motion.div key={text} variants={linkVariants}>
                  <Link
                    to={path}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
                  >
                    <span>{text}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {serviceLinks.map((service) => (
                <motion.div key={service} variants={linkVariants}>
                  <Link
                    to="/services"
                    className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
                  >
                    <span>{service}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h3>
            <div className="space-y-5">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Address</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone size={17} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Phone</p>
                  <a
                    href="tel:+916369898562"
                    className="mt-1 block text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    +91 63698 98562
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail size={17} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Email</p>
                  <a
                    href="mailto:support@healthnest.com"
                    className="mt-1 block text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    support@healthnest.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <div className="my-12 h-px bg-slate-800" />
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} HealthNest. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xs font-medium text-slate-500 transition-colors hover:text-emerald-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-xs font-medium text-slate-500 transition-colors hover:text-emerald-400"
            >
              Terms of Service
            </Link>

            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1.5 text-xs text-slate-500"
            >
              Made with <HeartPulse size={13} className="text-emerald-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}