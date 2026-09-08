import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartPulse,
  Menu,
  Moon,
  Stethoscope,
  Sun,
  X,
} from "lucide-react";
import { Button } from "./UI";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Health Library", to: "/health-library" },
  { label: "Reports", to: "/reports" },
  { label: "Contact", to: "/contact" },
];
export default function Navbar({ dark, setDark, onBook }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Appointment notification
  const [appointment, setAppointment] = useState(() => {
    try {
      const saved = localStorage.getItem("healthnest-appointment");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("healthnest-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark?.(true);
      return;
    }

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark?.(false);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.classList.toggle("dark", prefersDark);
    setDark?.(prefersDark);
  }, [setDark]);

  useEffect(() => {
    if (typeof dark !== "boolean") return;

    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "healthnest-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 60);
      setShowTop(currentScroll > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Listen for appointment confirmation
  useEffect(() => {
    const updateAppointment = () => {
      try {
        const saved = localStorage.getItem(
          "healthnest-appointment"
        );

        setAppointment(saved ? JSON.parse(saved) : null);
      } catch {
        setAppointment(null);
      }
    };

    window.addEventListener(
      "healthnest-appointment-updated",
      updateAppointment
    );

    window.addEventListener("storage", updateAppointment);

    return () => {
      window.removeEventListener(
        "healthnest-appointment-updated",
        updateAppointment
      );

      window.removeEventListener("storage", updateAppointment);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setProfile(false);
    setNotifications(false);
  };

  const toggleDarkMode = () => {
    const nextDark = !dark;

    document.documentElement.classList.toggle(
      "dark",
      nextDark
    );

    localStorage.setItem(
      "healthnest-theme",
      nextDark ? "dark" : "light"
    );

    setDark?.(nextDark);
  };

  const handleBook = () => {
    closeMenus();
    onBook?.();
  };

  const handleSignOut = () => {
    localStorage.removeItem("healthnest-user");
    localStorage.removeItem("healthnest-auth");

    closeMenus();

    navigate("/login");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed left-0 right-0 top-0 z-[100] w-full
          px-2 pt-2
          sm:px-4 sm:pt-3
          lg:left-1/2 lg:right-auto lg:top-4
          lg:w-[calc(100%-40px)]
          lg:-translate-x-1/2
          lg:px-0 lg:pt-0
          xl:max-w-[1500px]
        "
      >
        {/* Glow */}

        <motion.div
          animate={{
            opacity: scrolled ? 0.25 : 0.5,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: { duration: 0.4 },
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            pointer-events-none absolute -inset-3
            rounded-[30px]
            bg-gradient-to-r
            from-emerald-400/20
            via-teal-400/10
            to-cyan-400/20
            blur-2xl
          "
        />

        <div
          className={`
            relative overflow-visible
            rounded-[20px] sm:rounded-[24px]
            border
            shadow-[0_15px_50px_rgba(15,23,42,0.10)]
            backdrop-blur-2xl
            backdrop-saturate-150
            transition-all duration-500
            dark:shadow-[0_18px_60px_rgba(0,0,0,0.40)]
            ${
              scrolled
                ? "border-slate-200 bg-white/95 dark:border-slate-700/70 dark:bg-slate-950/95"
                : "border-white/70 bg-white/85 dark:border-slate-700/50 dark:bg-slate-950/90"
            }
          `}
          style={{
            WebkitBackdropFilter:
              "blur(24px) saturate(180%)",
          }}
        >
          {/* Background */}

          <div
            className="
              pointer-events-none absolute inset-0
              rounded-[20px] sm:rounded-[24px]
              bg-gradient-to-r
              from-emerald-50/60
              via-white/70
              to-cyan-50/50
              dark:from-emerald-950/20
              dark:via-slate-950/70
              dark:to-cyan-950/20
            "
          />

          <div
            className="
              pointer-events-none absolute
              left-5 right-5 top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-300/80
              to-transparent
              dark:via-emerald-500/30
            "
          />

          {/* Main navbar */}

          <div
            className="
              relative z-10 flex min-h-[60px]
              items-center justify-between
              gap-2 px-2 py-2
              sm:min-h-[68px]
              sm:px-3 sm:py-2.5
            "
          >
            {/* Logo */}

            <Link
              to="/"
              onClick={closeMenus}
              className="
                group flex min-w-0 shrink-0
                items-center gap-2
                sm:gap-2.5
              "
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.06,
                  y: -2,
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  relative grid h-9 w-9 shrink-0
                  place-items-center overflow-hidden
                  rounded-[12px]
                  bg-gradient-to-br
                  from-emerald-500
                  via-teal-500
                  to-cyan-600
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  sm:h-11 sm:w-11
                  sm:rounded-[14px]
                "
              >
                <HeartPulse
                  size={20}
                  strokeWidth={2.5}
                  className="relative z-10 sm:h-[23px] sm:w-[23px]"
                />

                <span
                  className="
                    absolute -right-3 -top-3
                    h-8 w-8 rounded-full
                    bg-white/20 blur-md
                  "
                />
              </motion.div>

              <div className="min-w-0">
                <p
                  className="
                    truncate text-[6px]
                    font-black uppercase
                    tracking-[0.18em]
                    text-emerald-600
                    sm:text-[8px]
                    sm:tracking-[0.3em]
                    dark:text-emerald-400
                  "
                >
                  Healthcare
                </p>

                <h1
                  className="
                    whitespace-nowrap
                    text-[17px]
                    font-black
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-xl
                    dark:text-white
                  "
                >
                  Health{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-emerald-500
                      via-teal-500
                      to-cyan-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Nest
                  </span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav
              aria-label="Primary navigation"
              className="
                hidden flex-1 items-center
                justify-center gap-1 px-4 lg:flex
              "
            >
              {NAV_ITEMS.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenus}
                  className={({ isActive }) => `
                    group relative flex
                    items-center justify-center
                    whitespace-nowrap rounded-xl
                    px-3 py-2.5
                    text-sm font-bold
                    transition-all duration-300
                    xl:px-4
                    ${
                      isActive
                        ? "text-emerald-700 dark:text-emerald-400"
                        : "text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="healthnest-active-nav"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="
                            absolute inset-0
                            rounded-xl
                            border
                            border-emerald-200/70
                            bg-emerald-50
                            shadow-sm
                            dark:border-emerald-500/10
                            dark:bg-emerald-950/50
                          "
                        />
                      )}

                      <span
                        className="
                          absolute inset-0
                          rounded-xl
                          bg-emerald-400/0
                          transition-all
                          duration-300
                          group-hover:bg-emerald-400/5
                        "
                      />

                      <motion.span
                        initial={{
                          opacity: 0,
                          y: -4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.1 + index * 0.04,
                          duration: 0.3,
                        }}
                        className="relative z-10"
                      >
                        {item.label}
                      </motion.span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}

            <div
              className="
                ml-auto flex shrink-0
                items-center gap-0.5
                sm:gap-1
              "
            >
              {/* Theme */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.07,
                  rotate: 7,
                }}
                whileTap={{ scale: 0.88 }}
                onClick={toggleDarkMode}
                className="
                  grid h-9 w-9 shrink-0
                  place-items-center rounded-xl
                  text-slate-600
                  transition-all duration-300
                  hover:bg-emerald-50
                  hover:text-emerald-600
                  sm:h-10 sm:w-10
                  dark:text-slate-300
                  dark:hover:bg-emerald-950/50
                  dark:hover:text-emerald-400
                "
                aria-label={
                  dark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                <AnimatePresence mode="wait">
                  {dark ? (
                    <motion.div
                      key="sun"
                      initial={{
                        rotate: -90,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        scale: 0,
                        opacity: 0,
                      }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{
                        rotate: 90,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        scale: 0,
                        opacity: 0,
                      }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Notifications */}

              <div className="relative hidden xl:block">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setNotifications(
                      (prev) => !prev
                    );
                    setProfile(false);
                  }}
                  className="
                    relative grid h-10 w-10
                    place-items-center
                    rounded-xl
                    text-slate-600
                    transition-all duration-300
                    hover:bg-emerald-50
                    hover:text-emerald-600
                    dark:text-slate-300
                    dark:hover:bg-emerald-950/50
                    dark:hover:text-emerald-400
                  "
                  aria-label="Notifications"
                  aria-expanded={notifications}
                >
                  <Bell size={19} />

                  {appointment ? (
                    <span
                      className="
                        absolute right-2 top-1.5
                        h-2 w-2 rounded-full
                        bg-emerald-500
                        ring-2 ring-white
                        dark:ring-slate-950
                      "
                    />
                  ) : (
                    <span
                      className="
                        absolute right-2 top-1.5
                        h-2 w-2 rounded-full
                        bg-rose-500
                        ring-2 ring-white
                        dark:ring-slate-950
                      "
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {notifications && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        scale: 0.96,
                      }}
                      className="
                        absolute right-0 top-14
                        z-[200] w-[330px]
                        overflow-hidden
                        rounded-2xl
                        border border-slate-200
                        bg-white p-3
                        shadow-2xl
                        dark:border-slate-700
                        dark:bg-slate-900
                      "
                    >
                      <div
                        className="
                          mb-2 flex
                          items-center
                          justify-between px-2
                        "
                      >
                        <h3
                          className="
                            font-black
                            text-slate-900
                            dark:text-white
                          "
                        >
                          Notifications
                        </h3>

                        <span
                          className="
                            rounded-full
                            bg-emerald-100
                            px-2 py-1
                            text-[10px]
                            font-bold
                            text-emerald-700
                            dark:bg-emerald-950
                            dark:text-emerald-400
                          "
                        >
                          {appointment ? "1 New" : "2 New"}
                        </span>
                      </div>

                      {/* Dynamic appointment notification */}

                      {appointment ? (
                        <>
                          <NotificationItem
                            icon={
                              <CalendarCheck
                                size={17}
                              />
                            }
                            title="Appointment Confirmed"
                            text={`Your appointment with ${
                              appointment.doctor ||
                              "your doctor"
                            } is confirmed.`}
                            time="Just now"
                          />

                          <div
                            className="
                              mx-2 mb-2
                              rounded-xl
                              bg-emerald-50
                              p-3
                              dark:bg-emerald-950/30
                            "
                          >
                            <div
                              className="
                                flex items-center
                                gap-2 text-xs
                                font-bold
                                text-emerald-700
                                dark:text-emerald-400
                              "
                            >
                              <CalendarCheck
                                size={14}
                              />
                              {appointment.date ||
                                "Date selected"}
                            </div>

                            <div
                              className="
                                mt-1 flex items-center
                                gap-2 text-xs
                                text-slate-600
                                dark:text-slate-300
                              "
                            >
                              <Clock3 size={14} />
                              {appointment.time ||
                                "Time selected"}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <NotificationItem
                            icon={
                              <CalendarCheck
                                size={17}
                              />
                            }
                            title="Appointment Confirmed"
                            text="Your appointment notification will appear here after booking."
                            time="—"
                          />

                          <NotificationItem
                            icon={
                              <Clock3 size={17} />
                            }
                            title="Appointment Reminder"
                            text="Your consultation reminders will appear here."
                            time="—"
                          />
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}

              <div className="relative hidden lg:block">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setProfile((prev) => !prev);
                    setNotifications(false);
                  }}
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-slate-200/80
                    bg-white/70
                    px-2 py-1.5
                    transition-all
                    hover:border-emerald-200
                    hover:bg-emerald-50/70
                    dark:border-slate-700
                    dark:bg-slate-900/70
                    dark:hover:border-emerald-800
                    dark:hover:bg-emerald-950/40
                  "
                  aria-expanded={profile}
                >
                  <div
                    className="
                      grid h-8 w-8
                      place-items-center
                      rounded-lg
                      bg-gradient-to-br
                      from-emerald-500
                      to-cyan-600
                      text-[11px]
                      font-black
                      text-white
                    "
                  >
                    DG
                  </div>

                  <div className="hidden text-left xl:block">
                    <p
                      className="
                        text-xs font-black
                        text-slate-900
                        dark:text-white
                      "
                    >
                      Dinesh
                    </p>

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        text-emerald-600
                        dark:text-emerald-400
                      "
                    >
                      Patient
                    </p>
                  </div>

                  <ChevronDown
                    size={15}
                    className={`
                      text-slate-400
                      transition-transform
                      duration-300
                      ${
                        profile
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </motion.button>

                <AnimatePresence>
                  {profile && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        scale: 0.96,
                      }}
                      className="
                        absolute right-0 top-14
                        z-[200] w-[280px]
                        overflow-hidden
                        rounded-2xl
                        border border-slate-200
                        bg-white p-3
                        shadow-2xl
                        dark:border-slate-700
                        dark:bg-slate-900
                      "
                    >
                      <div
                        className="
                          mb-2 rounded-xl
                          border border-emerald-100
                          bg-gradient-to-r
                          from-emerald-50
                          to-cyan-50
                          p-3
                          dark:border-emerald-900/60
                          dark:from-emerald-950/40
                          dark:to-cyan-950/30
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              grid h-11 w-11
                              place-items-center
                              rounded-xl
                              bg-gradient-to-br
                              from-emerald-500
                              to-cyan-600
                              text-sm
                              font-black
                              text-white
                            "
                          >
                            DG
                          </div>

                          <div>
                            <p
                              className="
                                font-black
                                text-slate-900
                                dark:text-white
                              "
                            >
                              Dinesh
                            </p>

                            <p
                              className="
                                text-xs
                                text-emerald-600
                                dark:text-emerald-400
                              "
                            >
                              Active patient
                            </p>
                          </div>
                        </div>
                      </div>

                      <DropdownLink
                        to="/dashboard"
                        icon={
                          <HeartPulse size={17} />
                        }
                        text="Patient Dashboard"
                        onClick={closeMenus}
                      />

                      <DropdownLink
                        to="/reports"
                        icon={
                          <CheckCircle2 size={17} />
                        }
                        text="Medical Reports"
                        onClick={closeMenus}
                      />

                      <DropdownLink
                        to="/doctors"
                        icon={
                          <Stethoscope size={17} />
                        }
                        text="My Appointments"
                        onClick={closeMenus}
                      />

                      <div
                        className="
                          my-2 border-t
                          border-slate-200
                          dark:border-slate-800
                        "
                      />

                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="
                          flex w-full
                          items-center
                          justify-center
                          rounded-xl
                          border border-rose-100
                          bg-rose-50
                          px-3 py-2.5
                          text-sm font-black
                          text-rose-600
                          transition-all duration-200
                          hover:border-rose-200
                          hover:bg-rose-100
                          dark:border-rose-900/40
                          dark:bg-rose-950/30
                          dark:text-rose-400
                          dark:hover:bg-rose-950/50
                        "
                      >
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Appointment */}

              <Button
                onClick={handleBook}
                className="
                  hidden rounded-xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-3 py-2
                  text-xs font-black
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  transition-all
                  hover:scale-[1.02]
                  hover:shadow-emerald-500/30
                  lg:block
                  xl:px-4 xl:text-sm
                "
              >
                Book Appointment
              </Button>

              {/* Mobile menu */}

              <motion.button
                type="button"
                whileTap={{ scale: 0.88 }}
                onClick={() => {
                  setOpen((prev) => !prev);
                  setProfile(false);
                  setNotifications(false);
                }}
                className="
                  grid h-9 w-9 shrink-0
                  place-items-center
                  rounded-xl
                  border
                  border-slate-200/80
                  bg-white/90
                  text-slate-700
                  shadow-sm
                  transition-all
                  hover:bg-emerald-50
                  hover:text-emerald-600
                  sm:h-10 sm:w-10
                  lg:hidden
                  dark:border-slate-700
                  dark:bg-slate-900/90
                  dark:text-slate-200
                  dark:hover:bg-emerald-950/50
                  dark:hover:text-emerald-400
                "
                aria-label={
                  open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
                aria-controls="mobile-navigation"
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenus}
              className="
                fixed inset-0 z-[140]
                bg-slate-950/35
                backdrop-blur-[2px]
                lg:hidden
              "
            />

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed left-2 right-2
                top-[74px] z-[150]
                max-h-[calc(100vh-86px)]
                overflow-hidden
                rounded-2xl
                border border-white/70
                bg-white
                shadow-[0_20px_60px_rgba(15,23,42,0.18)]
                sm:left-3 sm:right-3
                sm:top-[84px]
                sm:max-h-[calc(100vh-98px)]
                lg:hidden
                dark:border-slate-700
                dark:bg-slate-950
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-br
                  from-emerald-50/70
                  via-white
                  to-cyan-50/60
                  dark:from-emerald-950/30
                  dark:via-slate-950
                  dark:to-cyan-950/20
                "
              />

              <div
                className="
                  relative z-10
                  max-h-[calc(100vh-86px)]
                  overflow-y-auto
                  overscroll-contain
                  p-3
                  sm:max-h-[calc(100vh-98px)]
                  sm:p-4
                "
              >
                {/* Mobile Profile */}

                <div
                  className="
                    mb-3 rounded-2xl
                    border border-emerald-100
                    bg-gradient-to-r
                    from-emerald-50
                    to-cyan-50
                    p-3
                    dark:border-emerald-900/60
                    dark:from-emerald-950/50
                    dark:to-cyan-950/30
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        grid h-11 w-11
                        shrink-0
                        place-items-center
                        rounded-xl
                        bg-gradient-to-br
                        from-emerald-500
                        to-cyan-600
                        text-sm font-black
                        text-white
                        shadow-md
                        shadow-emerald-500/20
                      "
                    >
                      DG
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          font-black
                          text-slate-900
                          dark:text-white
                        "
                      >
                        Dinesh
                      </p>

                      <p
                        className="
                          text-xs
                          font-semibold
                          text-emerald-600
                          dark:text-emerald-400
                        "
                      >
                        Active patient
                      </p>
                    </div>

                    <div
                      className="
                        ml-auto flex
                        items-center gap-1.5
                        rounded-full
                        bg-emerald-100
                        px-2.5 py-1
                        dark:bg-emerald-950
                      "
                    >
                      <span
                        className="
                          h-2 w-2
                          rounded-full
                          bg-emerald-500
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          text-emerald-700
                          dark:text-emerald-400
                        "
                      >
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}

                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMenus}
                      className={({ isActive }) => `
                        flex min-h-[46px]
                        items-center
                        rounded-xl
                        px-4 py-3
                        text-sm font-bold
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-950/70 dark:text-emerald-400"
                            : "text-slate-700 hover:bg-white/80 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                        }
                      `}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {/* Account */}

                <div
                  className="
                    mt-3 border-t
                    border-slate-200
                    pt-3
                    dark:border-slate-800
                  "
                >
                  <p
                    className="
                      mb-1 px-2
                      text-[10px]
                      font-black uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Account
                  </p>

                  <DropdownLink
                    to="/dashboard"
                    icon={<HeartPulse size={17} />}
                    text="Patient Dashboard"
                    onClick={closeMenus}
                  />

                  <DropdownLink
                    to="/reports"
                    icon={<CheckCircle2 size={17} />}
                    text="Medical Reports"
                    onClick={closeMenus}
                  />

                  <DropdownLink
                    to="/doctors"
                    icon={<Stethoscope size={17} />}
                    text="My Appointments"
                    onClick={closeMenus}
                  />
                </div>

                {/* Mobile Notifications */}

                <div
                  className="
                    mt-3 border-t
                    border-slate-200
                    pt-3
                    dark:border-slate-800
                  "
                >
                  <div
                    className="
                      mb-2 flex
                      items-center
                      justify-between px-2
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-black uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      Notifications
                    </p>

                    <span
                      className="
                        rounded-full
                        bg-emerald-100
                        px-2 py-0.5
                        text-[10px]
                        font-bold
                        text-emerald-700
                        dark:bg-emerald-950
                        dark:text-emerald-400
                      "
                    >
                      {appointment ? "1 New" : "2 New"}
                    </span>
                  </div>

                  {appointment ? (
                    <NotificationItem
                      icon={
                        <CalendarCheck size={17} />
                      }
                      title="Appointment Confirmed"
                      text={`Your appointment with ${
                        appointment.doctor ||
                        "your doctor"
                      } is confirmed.`}
                      time="Just now"
                    />
                  ) : (
                    <NotificationItem
                      icon={
                        <CalendarCheck size={17} />
                      }
                      title="Appointment"
                      text="Your appointment confirmation will appear here."
                      time="—"
                    />
                  )}
                </div>

                {/* Mobile Book */}

                <div
                  className="
                    mt-3 border-t
                    border-slate-200
                    pt-3
                    dark:border-slate-800
                  "
                >
                  <Button
                    onClick={handleBook}
                    className="
                      w-full rounded-xl
                      bg-gradient-to-r
                      from-emerald-500
                      to-teal-500
                      py-3
                      text-sm font-black
                      text-white
                      shadow-lg
                      shadow-emerald-500/20
                      transition-all
                      hover:from-emerald-600
                      hover:to-teal-600
                    "
                  >
                    Book Appointment
                  </Button>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="
                      mt-2 flex w-full
                      items-center
                      justify-center
                      rounded-xl
                      border border-rose-100
                      bg-rose-50
                      px-3 py-2.5
                      text-center
                      text-sm font-black
                      text-rose-600
                      transition-all duration-200
                      hover:border-rose-200
                      hover:bg-rose-100
                      dark:border-rose-900/40
                      dark:bg-rose-950/30
                      dark:text-rose-400
                      dark:hover:bg-rose-950/50
                    "
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= SCROLL TOP ================= */}

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="
              fixed bottom-5 right-5
              z-[90] grid h-11 w-11
              place-items-center
              rounded-full
              bg-gradient-to-br
              from-emerald-500
              to-teal-600
              text-white
              shadow-xl
              shadow-emerald-500/25
              sm:bottom-7 sm:right-7
            "
            aria-label="Scroll to top"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= NOTIFICATION ================= */

function NotificationItem({
  icon,
  title,
  text,
  time,
}) {
  return (
    <motion.div
      whileHover={{
        x: 3,
        scale: 1.01,
      }}
      className="
        flex items-start gap-3
        rounded-xl p-2.5
        transition-all
        hover:bg-slate-50
        dark:hover:bg-slate-800/50
      "
    >
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="
          grid h-9 w-9 shrink-0
          place-items-center
          rounded-lg
          bg-emerald-50
          text-emerald-600
          dark:bg-emerald-950/50
          dark:text-emerald-400
        "
      >
        {icon}
      </motion.div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p
            className="
              text-xs font-black
              text-slate-900
              dark:text-white
            "
          >
            {title}
          </p>

          <span
            className="
              shrink-0
              text-[10px]
              text-slate-400
            "
          >
            {time}
          </span>
        </div>

        <p
          className="
            mt-0.5 text-[11px]
            text-slate-500
            dark:text-slate-400
          "
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* ================= DROPDOWN LINK ================= */

function DropdownLink({
  to,
  icon,
  text,
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        flex items-center gap-2.5
        rounded-xl px-3 py-2.5
        text-sm font-bold
        text-slate-700
        transition-all
        hover:bg-emerald-50
        hover:text-emerald-600
        dark:text-slate-200
        dark:hover:bg-emerald-950/40
        dark:hover:text-emerald-400
      "
    >
      <span
        className="
          text-slate-400
          dark:text-slate-500
        "
      >
        {icon}
      </span>

      {text}
    </Link>
  );
}