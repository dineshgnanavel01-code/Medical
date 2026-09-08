import { useState, useRef, useEffect } from "react";
import {Search,SlidersHorizontal,Stethoscope,Users,Sparkles,} from "lucide-react";
import DoctorCard from "../components/DoctorCard";
import { doctorsData as doctors } from "../data/mockData";
function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const specialties = [
    "All",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Dental Care",
    "Orthopedics",
    "Dermatology",
  ]
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredDoctors = doctors.filter((doctor) => {
    const searchValue = search.toLowerCase().trim();
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchValue) ||
      doctor.specialization.toLowerCase().includes(searchValue);
    const matchesSpecialty =
      specialty === "All" ||
      doctor.specialization.toLowerCase() === specialty.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All");
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-10 dark:bg-slate-950 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"
          style={{
            animation: "float 7s ease-in-out infinite",
          }} />
        <div
          className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"
          style={{
            animation: "float 9s ease-in-out infinite reverse",
          }}/>

        <div
          className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl"
          style={{
            animation: "float 8s ease-in-out infinite",
          }}/>
      </div>
      <div className="relative z-10 mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full text-center">
       
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/70">
            <Sparkles
              size={14}
              className="transition-transform duration-300 hover:rotate-12"/>
            Trusted Healthcare Experts
          </div>
          <h1
            className="animate-fade-up mt-5 text-4xl font-extrabold tracking-tight text-slate-900 transition-transform duration-300 hover:scale-[1.01] dark:text-white sm:text-5xl lg:text-6xl"
            style={{
              animationDelay: "100ms",
            }} >
            Find the right{" "}
            <span className="text-emerald-600 transition-colors duration-300 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
              specialist
            </span>
          </h1>
          <p
            className="animate-fade-up mx-auto mt-5 max-w-full text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg"
            style={{
              animationDelay: "200ms",
            }}>
            Connect with experienced and trusted healthcare professionals who
            are ready to provide personalized care for you and your family.
          </p>
          <div
            className="animate-fade-up mt-7 flex flex-wrap justify-center gap-5 text-sm text-slate-500 dark:text-slate-400 sm:gap-8"
            style={{
              animationDelay: "300ms",
            }} >
            <span className="group flex cursor-default items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-950/50 dark:text-emerald-400">
                <Users size={16} />
              </span>
              50+ Specialists
            </span>
            <span className="group flex cursor-default items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-100 text-cyan-600 transition-transform duration-300 group-hover:scale-110 dark:bg-cyan-950/50 dark:text-cyan-400">
                <Stethoscope size={16} />
              </span>
              Verified Doctors
            </span>
          </div>
        </div>
        <div
          className="animate-fade-up mx-auto mt-12 max-w-full"
          style={{
            animationDelay: "400ms",
          }}>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none sm:p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_280px]">
          
              <div className="group relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-emerald-500"/>
                <input
                  type="text"
                  placeholder="Search doctor or specialty..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-emerald-300 hover:bg-white focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-emerald-700 dark:focus:border-emerald-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-950"/>
              </div>
              <div className="relative">
                <SlidersHorizontal
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-emerald-600"/>
                <button
                  ref={buttonRef}
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex h-14 w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold text-slate-700 outline-none transition-all duration-300 hover:border-emerald-300 hover:bg-white hover:shadow-md focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-slate-800 dark:focus:border-emerald-500 dark:focus:ring-emerald-950">
                  <span>{specialty}</span>

                  <span
                    className={`text-xs text-slate-400 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`} >
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute bottom-full left-0 right-0 z-[100] mb-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                    <div className="max-h-60 overflow-y-auto py-1">
                      {specialties.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSpecialty(item);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 ${
                            specialty === item
                              ? "bg-emerald-600 font-semibold text-white"
                              : "text-slate-700 hover:translate-x-1 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400"
                          }`}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Showing{" "}
                <span className="font-bold text-slate-800 dark:text-white">
                  {filteredDoctors.length}
                </span>{" "}
                {filteredDoctors.length === 1 ? "doctor" : "doctors"}
              </p>

              {(search || specialty !== "All") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="self-start text-sm font-semibold text-emerald-600 transition-all duration-300 hover:translate-x-1 hover:text-emerald-700 hover:underline sm:self-auto">
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

    
        {filteredDoctors.length > 0 ? (
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="doctor-card"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}>
                <div className="doctor-card-inner">
                  <DoctorCard doctor={doctor} />
                </div>
              </div>
            ))}
          </div>
        ) : (
        
          <div className="animate-fade-up py-24 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-emerald-100 text-emerald-600 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:scale-110 dark:bg-emerald-950/50 dark:text-emerald-400">
              <Search size={32} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-800 transition-colors duration-300 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
              No doctors found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-slate-500 dark:text-slate-400">
              We couldn't find a doctor matching your search. Try another name
              or select a different specialty.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-700 hover:shadow-xl">
              Show All Doctors
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .doctor-card {
          animation: fadeUp 0.7s ease-out forwards;
          opacity: 0;
        }

        /* Doctor card hover movement - NO BLUR */
        .doctor-card-inner {
          transform: translateY(0);
          transition: transform 0.45s ease;
          will-change: transform;
        }

        .doctor-card-inner:hover {
          transform: translateY(-12px);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .doctor-card {
            animation: none;
            opacity: 1;
          }

          .doctor-card-inner {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Doctors;