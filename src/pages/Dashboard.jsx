import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {CalendarDays,FileText,Pill,HeartPulse,Clock3,ArrowRight,Activity,Sparkles,CheckCircle2,} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardHover = {
  y: -8,
  scale: 1.02,
  rotateX: 2,
  rotateY: -2,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

function Dashboard() {
  const stats = [
    {
      title: "Upcoming Appointments",
      value: "2",
      icon: CalendarDays,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      description: "Scheduled visits",
    },
    {
      title: "Medical Reports",
      value: "8",
      icon: FileText,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      description: "Available reports",
    },
    {
      title: "Prescriptions",
      value: "5",
      icon: Pill,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500",
      description: "Active prescriptions",
    },
    {
      title: "Health Score",
      value: "92%",
      icon: HeartPulse,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
      description: "Excellent condition",
      health: true,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-16 transition-colors duration-500 dark:bg-slate-950">
    
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>

      <motion.div
        className="pointer-events-none absolute -right-32 top-80 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, -35, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                <Sparkles size={15} />
                Patient Dashboard
              </motion.div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Alex
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                Manage your healthcare information, appointments, reports, and
                prescriptions in one place.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Health status: Excellent
            </motion.div>
          </div>
        </motion.div>

       <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                variants={fadeUp}
                whileHover={cardHover}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900">
            
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.iconBg} ${stat.iconColor}`}>
                    <Icon size={23} />
                  </motion.div>

                  {stat.health && (
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      Great
                    </motion.div>
                  )}
                </div>

                <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>

                <div className="mt-2 flex items-end justify-between">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className={`text-3xl font-black ${
                      stat.health
                        ? "text-emerald-500"
                        : "text-slate-900 dark:text-white"
                    }`}>
                    {stat.value}
                  </motion.p>

                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {stat.description}
                  </span>
                </div>

                {stat.health && (
                  <div className="mt-5">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-7 grid gap-6 lg:grid-cols-3">
  
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -7, scale: 1.01 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

            <div className="relative flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Activity size={19} className="text-emerald-500" />
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">
                    Next Appointment
                  </h2>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Your upcoming healthcare visit
                </p>
              </div>

              <motion.span
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <CheckCircle2 size={13} />
                Confirmed
              </motion.span>
            </div>

            <motion.div
              whileHover={{ scale: 1.015 }}
              className="relative mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 group-hover:border-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:group-hover:border-emerald-900">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                    SJ
                  </motion.div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Dr. Sarah Johnson
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Cardiologist
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                    <CalendarDays size={14} className="text-emerald-500" />
                    September 15, 2026
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                    <Clock3 size={14} className="text-cyan-500" />
                    10:00 AM
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Appointment confirmed and ready
                </p>

                <Link
                  to="/doctors"
                  className="group/btn inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400" >
                  View Doctor
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>

      
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-7 text-white shadow-xl shadow-emerald-900/10" >
            <motion.div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}  />

            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-2xl" />

            <div className="relative">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md"   >
                <FileText size={23} />
              </motion.div>

              <h2 className="text-2xl font-black">Medical Reports</h2>

              <p className="mt-3 text-sm leading-7 text-emerald-50">
                View and manage your latest medical reports, test results, and
                health records.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="grid h-8 w-8 place-items-center rounded-full border-2 border-emerald-600 bg-white/20 text-xs font-bold"
                    >
                      <FileText size={13} />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-50">
                  8 reports available
                </span>
              </div>

              <Link
                to="/reports"
                className="group/report mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" >
                View Reports
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/report:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

       
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Quick Actions
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Access your most important healthcare tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-xl">
                <CalendarDays size={16} />
                Book Appointment
              </Link>

              <Link
                to="/reports"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:text-emerald-400" >
                <FileText size={16} />
                My Reports
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Dashboard;