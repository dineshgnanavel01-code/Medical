import {FileText,CalendarDays,UserRound,ArrowUpRight,Activity,CheckCircle2, Clock3,Download,Search,HeartPulse,ShieldCheck,MoreHorizontal,ChevronRight,} from "lucide-react";
import { motion } from "framer-motion";
import { reports } from "../data/mockData";
import Page from "../components/Page";

export default function Reports() {
  return (
    <Page>
      <div className="min-h-screen bg-slate-100/70 px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold text-emerald-600 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900 dark:text-emerald-400"
                >
                  <HeartPulse size={15} />
                  PERSONAL HEALTH CENTER
                </motion.div>

                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Medical{" "}
                  <span className="text-emerald-500">
                    Reports
                  </span>
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Everything related to your medical examinations,
                  laboratory tests and health records.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-fit items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
              >
                <Download size={17} />
                Export Records
              </motion.button>
            </div>
          </motion.div>

          <div className="mb-8 grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-6 text-white shadow-xl shadow-emerald-500/20"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/75">
                      Health Records
                    </p>

                    <h2 className="mt-2 text-4xl font-black">
                      {reports.length}
                    </h2>

                    <p className="mt-1 text-sm text-white/75">
                      Total medical reports
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md"
                  >
                    <FileText size={24} />
                  </motion.div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70">
                      Record status
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                      <span className="text-sm font-bold">
                        All systems healthy
                      </span>
                    </div>
                  </div>

                  <ShieldCheck size={24} className="opacity-70" />
                </div>
              </div>
            </motion.div>

            <OverviewCard
              icon={<CheckCircle2 size={22} />}
              title="Completed"
              value={reports.length}
              subtitle="Reports available"
              type="green"
              delay={0.1}
            />

            <OverviewCard
              icon={<Clock3 size={22} />}
              title="Recent"
              value="03"
              subtitle="Last 30 days"
              type="orange"
              delay={0.2}
            />
          </div>

    
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search reports, doctors or dates..."
                className="w-full rounded-xl bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800"
              />
            </div>

            <button className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition duration-300 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-emerald-500/10">
              All Reports
            </button>
          </motion.div>

          <div className="space-y-4">

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  Your Reports
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Latest medical documents
                </p>
              </div>

              <button className="flex items-center gap-1 text-sm font-bold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400">
                View all
                <ChevronRight size={16} />
              </button>
            </div>

            {reports.map((report, index) => {
              const title =
                report.title ||
                report[1] ||
                "Medical Examination Report";

              const doctor =
                report.doctor ||
                report[2] ||
                "Dr. Specialist";

              const date =
                report.date ||
                report[3] ||
                "Recent";

              const status =
                report.status ||
                report[4] ||
                "Completed";

              return (
                <motion.div
                  key={report.id || index}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.005,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/30"
                >
              
                  <motion.div
                    className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 group-hover:scale-x-100"
                    transition={{ duration: 0.4 }}
                  />

                  <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center">

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white"
                    >
                      <FileText size={25} />
                    </motion.div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-emerald-500">
                            Report #{String(index + 1).padStart(2, "0")}
                          </p>

                          <h3 className="truncate text-base font-black text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 sm:text-lg">
                            {title}
                          </h3>
                        </div>

                        <button className="rounded-xl p-2 text-slate-400 transition duration-300 hover:bg-slate-100 hover:text-emerald-600 dark:hover:bg-slate-800">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>

                      {/* Meta Information */}
                      <div className="mt-4 flex flex-wrap gap-3">

                        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          <UserRound
                            size={14}
                            className="text-emerald-500"
                          />
                          {doctor}
                        </div>

                        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          <CalendarDays
                            size={14}
                            className="text-blue-500"
                          />
                          {date}
                        </div>

                        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          {status}
                        </div>

                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 border-t border-slate-100 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0 dark:border-slate-800">

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          x: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300"
                      >
                        <Download size={15} />
                        <span className="hidden sm:inline">
                          Download
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          x: 2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                      >
                        View
                        <ArrowUpRight size={15} />
                      </motion.button>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =========================
              EMPTY STATE
          ========================= */}
          {reports.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              >
                <CheckCircle2 size={30} />
              </motion.div>

              <h2 className="mt-5 text-xl font-black text-slate-900 dark:text-white">
                No Medical Reports
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
                Your medical reports will appear here once they are
                available.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400"
          >
            <ShieldCheck size={15} className="text-emerald-500" />
            Your medical records are securely stored and protected.
          </motion.div>
        </div>
      </div>
    </Page>
  );
}




function OverviewCard({
  icon,
  title,
  value,
  subtitle,
  type,
  delay,
}) {
  const styles = {
    green: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
      hover: "hover:border-emerald-300",
    },

    orange: {
      icon: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
      hover: "hover:border-orange-300",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.5,
      }}
      whileHover={{
        y: -5,
      }}
      className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${styles[type].hover}`}
    >
      <div className="flex items-start justify-between">

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles[type].icon}`}
        >
          {icon}
        </motion.div>

        <ArrowUpRight
          size={18}
          className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500"
        />
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h3 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
        {value}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}