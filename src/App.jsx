import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import Appointment from "./pages/Appointment";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import HealthLibrary from "./pages/HealthLibrary";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const navigate = useNavigate();

  // =========================
  // Dark / Light Theme
  // =========================
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("healthnest-theme");

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", dark);

    localStorage.setItem(
      "healthnest-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  // =========================
  // Book Appointment
  // =========================
  const handleBook = () => {
    navigate("/booking");
  };

  return (
    <>
      <ScrollToTop />

      <div
        className="
          min-h-screen
          bg-slate-50
          text-slate-900
          transition-colors
          duration-500
          dark:bg-slate-950
          dark:text-white
        "
      >
        {/* =========================
            Navbar
        ========================= */}
        <Navbar
          dark={dark}
          setDark={setDark}
          onBook={handleBook}
        />

        {/* =========================
            Main Content
        ========================= */}
        <main className="pt-[88px] sm:pt-[96px]">
          <Routes>
            {/* =========================
                Home
            ========================= */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* =========================
                Doctors
            ========================= */}
            <Route
              path="/doctors"
              element={<Doctors />}
            />

            <Route
              path="/doctors/:id"
              element={<DoctorProfile />}
            />

            {/* =========================
                Services
            ========================= */}
            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/services/:id"
              element={<ServiceDetails />}
            />

            {/* =========================
                Booking
            ========================= */}
            <Route
              path="/booking"
              element={<Booking />}
            />

            <Route
              path="/booking/:doctorId"
              element={<Booking />}
            />

            {/* =========================
                Appointment
            ========================= */}
            <Route
              path="/appointment"
              element={<Appointment />}
            />

            <Route
              path="/appointment/:doctorId"
              element={<Appointment />}
            />

            {/* =========================
                Dashboard
            ========================= */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* =========================
                Reports
            ========================= */}
            <Route
              path="/reports"
              element={<Reports />}
            />

            {/* =========================
                Health Library
            ========================= */}
            <Route
              path="/health-library"
              element={<HealthLibrary />}
            />

            {/* =========================
                Contact
            ========================= */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* =========================
                Authentication
            ========================= */}
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </main>

        {/* =========================
            Footer
        ========================= */}
        <Footer />
      </div>
    </>
  );
}