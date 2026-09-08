import { useEffect, useState } from "react";
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Users,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { doctorsData, servicesData } from "../data/mockData";

export default function Home() {

const healthcareImages = [
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=85&w=1800",
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=85&w=1800",
];
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroImage((current) => {
        return (current + 1) % healthcareImages.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [healthcareImages.length]);



  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Happy Patients",
    },
    {
      icon: Stethoscope,
      value: "50+",
      label: "Expert Doctors",
    },
    {
      icon: HeartPulse,
      value: "15+",
      label: "Medical Services",
    },
    {
      icon: ShieldCheck,
      value: "24/7",
      label: "Healthcare Support",
    },
  ];

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-950">
      <section className="hero-section relative overflow-hidden py-20 lg:py-24">
        <div className="hero-background-3d absolute inset-0 overflow-hidden">

          {healthcareImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              aria-hidden="true"
              className={`hero-bg-image ${
                index === activeHeroImage
                  ? "hero-bg-image-active"
                  : "hero-bg-image-hidden"
              }`}
            />
          ))}

        </div>

        <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-white/70 to-cyan-50/80 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-emerald-950/90" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

  

          <div
            className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
            style={{
              animation: "orbFloat 8s ease-in-out infinite",
            }}/>

         
          <div
            className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
            style={{
              animation: "orbFloatReverse 10s ease-in-out infinite",
            }} />
<div
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl"
            style={{
              animation: "orbFloatSlow 12s ease-in-out infinite",
            }}/>
          <div className="hero-floating-right absolute right-4 top-[5%] hidden h-36 w-48 overflow-hidden rounded-[1.5rem] border border-white/40 shadow-2xl sm:right-[6%] sm:top-[8%] sm:block sm:h-48 sm:w-64 lg:h-52 lg:w-72">

            <img
              src={
                healthcareImages[
                  (activeHeroImage + 1) % healthcareImages.length
                ]
              }
              alt="Healthcare professionals"
              className="h-full w-full object-cover"/>

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/30" />

            <div className="absolute bottom-2 left-2 rounded-xl border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-bold text-white shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:text-xs">
              Advanced Healthcare
            </div>
          </div>
          <div className="hero-floating-left absolute bottom-[4%] left-4 hidden h-32 w-44 overflow-hidden rounded-[1.2rem] border border-white/40 shadow-2xl sm:bottom-[8%] sm:left-[5%] sm:block sm:h-36 sm:w-52">

            <img
              src={
                healthcareImages[
                  (activeHeroImage + 2) % healthcareImages.length
                ]
              }
              alt="Healthcare professional"
              className="h-full w-full object-cover"/>

            <div className="absolute inset-0 bg-emerald-500/10" />
          </div>
          <div
            className="absolute left-[35%] top-[12%] h-4 w-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 sm:left-[45%] sm:top-[15%] sm:h-5 sm:w-5"
            style={{
              animation: "particleFloat 4s ease-in-out infinite",
            }}/>
          <div
            className="absolute bottom-[15%] right-[30%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 sm:bottom-[20%] sm:right-[35%] sm:h-3 sm:w-3"
            style={{
              animation: "particleFloatReverse 5s ease-in-out infinite",
            }}/>

          <div
            className="absolute left-[55%] top-[45%] h-3 w-3 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50"
            style={{
              animation: "particleFloat 6s ease-in-out infinite",
            }}/>

          <div
            className="absolute bottom-[30%] right-[12%] h-2 w-2 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/50"
            style={{
              animation: "particleFloatReverse 7s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-full grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="hero-content space-y-7">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700 shadow-lg backdrop-blur dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Trusted Modern Healthcare
            </div>
            <h1 className="hero-title text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Your Health,
              <br />
              Our{" "}
              <span className="relative text-emerald-600 dark:text-emerald-400">
                Top Priority
                <span className="absolute -bottom-2 left-0 h-1 w-2/3 rounded-full bg-emerald-400/50" />
              </span>
            </h1>
            <p className="hero-description max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Connect with trusted specialists, book appointments instantly,
              and manage your complete healthcare journey from one simple
              platform.
            </p>
            <div className="hero-benefits flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-700 dark:text-slate-300">

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Verified Doctors
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Secure Platform
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                24/7 Support
              </span>
            </div>
    
            <div className="hero-buttons flex flex-col gap-4 pt-2 sm:flex-row">

              <Link
                to="/doctors"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-2xl">
                Book Appointment

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:911"
                className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/90 px-8 py-4 font-bold text-slate-700 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-white hover:text-red-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800">
                <PhoneCall className="h-5 w-5 text-red-500 transition-transform duration-300 group-hover:rotate-12" />

                Emergency Hotline
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-emerald-400/25 blur-2xl" />
            <div className="hero-main-card relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl dark:border-slate-800">

              <img
                key={activeHeroImage}
                src={healthcareImages[activeHeroImage]}
                alt="Modern healthcare facility"
                className="hero-main-image h-[430px] w-full object-cover object-center lg:h-[520px]"/>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/20" />

       

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-emerald-700 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-emerald-300">

                <HeartPulse size={15} />

                Healthcare Essentials
              </div>

              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
            <div className="hero-trust-card absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:left-5">

              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <HeartPulse size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Trusted Healthcare
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  50+ Specialist Doctors
                </p>
              </div>
            </div>

            <div className="hero-rating-card absolute -right-4 top-10 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:-right-7">

              <div className="flex items-center gap-2">

                <span className="text-xl text-amber-400">
                  ★
                </span>

                <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                  4.9
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Patient Rating
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative z-20 mx-auto -mt-8 max-w-full px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center border-b border-slate-100 p-6 text-center transition-all duration-300 hover:bg-emerald-50/50 dark:border-slate-800 dark:hover:bg-emerald-950/20 md:border-b-0 md:border-r last:border-r-0" >

                <div className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-emerald-950 dark:text-emerald-400">
                  <Icon size={23} />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-full">

          <div className="mx-auto mb-14 max-w-full text-center">

            <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold lower case tracking-wider text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              Our Services
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Complete Healthcare Solutions
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Everything you need to manage your healthcare journey with
              confidence and convenience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {servicesData.slice(0, 4).map((service, index) => (
              <div
                key={service.id ?? index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-emerald-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800" >

                {service.image && (
                  <div className="mb-5 h-44 overflow-hidden rounded-2xl">

                    <img
                      src={service.image}
                      alt={
                        service.name ||
                        service.title ||
                        "Healthcare service"
                      }
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>
                )}

                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 dark:bg-emerald-950 dark:text-emerald-400">
                  <HeartPulse size={23} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.name ||
                    service.title ||
                    "Healthcare Service"}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {service.description ||
                    "Professional healthcare services designed around your needs."}
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-all hover:gap-3 dark:text-emerald-400">
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 px-6 py-3 font-bold text-emerald-600 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
            >
              View All Services
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 dark:bg-slate-900 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="mb-3 inline-block rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold lower case tracking-wider text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400">
                Our Doctors
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Meet Our Specialists
              </h2>

              <p className="mt-3 max-w-full text-slate-600 dark:text-slate-400">
                Experienced healthcare professionals dedicated to providing
                quality and compassionate care.
              </p>
            </div>

            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 font-bold text-emerald-600 transition-all hover:gap-3 hover:text-emerald-700 dark:text-emerald-400">
              View All Doctors
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {doctorsData.slice(0, 4).map((doctor, index) => (
              <div
                key={doctor.id ?? index}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950" >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={
                      doctor.image ||
                      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=85&w=700"
                    }
                    alt={doctor.name || "Doctor"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-lg backdrop-blur">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                    Available
                  </div>
                </div>

                <div className="p-5">

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {doctor.name || "Dr. Healthcare Specialist"}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {doctor.specialty ||
                      doctor.specialization ||
                      "Medical Specialist"}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">

                    <span className="flex items-center gap-1 text-amber-500">
                      ★ {doctor.rating || "4.9"}
                    </span>

                    <span className="text-slate-500 dark:text-slate-400">
                      Expert Doctor
                    </span>
                  </div>

                  <Link
                    to="/doctors"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-emerald-700">
                    Book Appointment
                    <CalendarCheck size={16} />
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">

        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=85&w=1800"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"/>

        <div className="absolute inset-0 bg-slate-950/80" />

        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl"
          style={{
            animation: "ctaPulse 5s ease-in-out infinite",
          }}/>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="cta-icon mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/30">
            <HeartPulse size={30} />
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Take Control of Your Health Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Find the right doctor, book your appointment, and take the next
            step toward a healthier future.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/doctors"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-2xl" >
              Book an Appointment

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"/>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              Explore Services
            </Link>

          </div>
        </div>
      </section>
      <style>{`
        .hero-background-3d {
          perspective: 1400px;
          transform-style: preserve-3d;
        }

        .hero-bg-image {
          position: absolute;
          inset: -8%;
          width: 116%;
          height: 116%;

          object-fit: cover;
          object-position: center;

          opacity: 0;

          transform:
            perspective(1400px)
            translate3d(80px, 0, -180px)
            rotateY(-8deg)
            rotateX(2deg)
            scale(1.12);

          filter: saturate(0.9);

          transition:
            opacity 1.4s ease,
            transform 5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-bg-image-active {
          opacity: 0.22;

          transform:
            perspective(1400px)
            translate3d(0, 0, 0)
            rotateY(0deg)
            rotateX(0deg)
            scale(1);
        }

        .hero-bg-image-hidden {
          opacity: 0;

          transform:
            perspective(1400px)
            translate3d(-100px, 20px, -220px)
            rotateY(10deg)
            rotateX(-3deg)
            scale(1.15);
        }

        @keyframes heroContent3D {

          0% {
            opacity: 0;

            transform:
              perspective(1200px)
              translate3d(-100px, 35px, -180px)
              rotateY(18deg)
              scale(0.88);
          }

          65% {
            opacity: 1;

            transform:
              perspective(1200px)
              translate3d(10px, -5px, 20px)
              rotateY(-2deg)
              scale(1.02);
          }

          100% {
            opacity: 1;

            transform:
              perspective(1200px)
              translate3d(0, 0, 0)
              rotateY(0)
              scale(1);
          }
        }

        .hero-badge {
          animation:
            heroContent3D
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.1s
            both;
        }

        .hero-title {
          animation:
            heroContent3D
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.2s
            both;
        }

        .hero-description {
          animation:
            heroContent3D
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.3s
            both;
        }

        .hero-benefits {
          animation:
            heroContent3D
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.4s
            both;
        }

        .hero-buttons {
          animation:
            heroContent3D
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.5s
            both;
        }


        @keyframes mainHeroImage3D {

          0% {
            opacity: 0;

            transform:
              perspective(1400px)
              translate3d(120px, 50px, -300px)
              rotateY(-25deg)
              rotateX(12deg)
              scale(0.78);
          }

          60% {
            opacity: 1;

            transform:
              perspective(1400px)
              translate3d(-10px, -8px, 35px)
              rotateY(5deg)
              rotateX(-2deg)
              scale(1.03);
          }

          100% {
            opacity: 1;

            transform:
              perspective(1400px)
              translate3d(0, 0, 0)
              rotateY(0)
              rotateX(0)
              scale(1);
          }
        }

        .hero-image-wrapper {
          perspective: 1400px;
          transform-style: preserve-3d;

          animation:
            mainHeroImage3D
            1.3s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.2s
            both;
        }

        .hero-main-card {
          transform-style: preserve-3d;

          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.7s ease;
        }

        .hero-main-card:hover {
          transform:
            perspective(1400px)
            rotateX(4deg)
            rotateY(-5deg)
            translate3d(0, -10px, 30px)
            scale(1.02);
        }

        .hero-main-image {
          transition:
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.8s ease;
        }

        .hero-main-card:hover .hero-main-image {
          transform: scale(1.06);
        }


        @keyframes rightMedicalFloat {

          0%,
          100% {
            transform:
              perspective(1000px)
              translate3d(0, 0, 0)
              rotateY(0deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              perspective(1000px)
              translate3d(-18px, -20px, 40px)
              rotateY(-6deg)
              rotateZ(2deg);
          }
        }

        .hero-floating-right {
          transform-style: preserve-3d;

          animation:
            rightMedicalFloat
            7s
            ease-in-out
            infinite;
        }


        @keyframes leftMedicalFloat {

          0%,
          100% {
            transform:
              perspective(1000px)
              translate3d(0, 0, 0)
              rotateY(0deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              perspective(1000px)
              translate3d(18px, 18px, 35px)
              rotateY(6deg)
              rotateZ(-2deg);
          }
        }

        .hero-floating-left {
          transform-style: preserve-3d;

          animation:
            leftMedicalFloat
            8s
            ease-in-out
            infinite;
        }


        @keyframes trustCardFloat {

          0%,
          100% {
            transform:
              perspective(800px)
              translate3d(0, 0, 0)
              rotateY(0deg);
          }

          50% {
            transform:
              perspective(800px)
              translate3d(0, -14px, 20px)
              rotateY(-3deg);
          }
        }

        .hero-trust-card {
          transform-style: preserve-3d;

          animation:
            trustCardFloat
            5s
            ease-in-out
            infinite;
        }



        @keyframes ratingCardFloat {

          0%,
          100% {
            transform:
              perspective(800px)
              translate3d(0, 0, 0)
              rotateY(0deg);
          }

          50% {
            transform:
              perspective(800px)
              translate3d(0, -12px, 25px)
              rotateY(4deg);
          }
        }

        .hero-rating-card {
          transform-style: preserve-3d;

          animation:
            ratingCardFloat
            6s
            ease-in-out
            infinite;
        }

        @keyframes orbFloat {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(35px, -30px, 40px)
              scale(1.15);
          }
        }

        @keyframes orbFloatReverse {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-40px, 30px, 30px)
              scale(1.12);
          }
        }

        @keyframes orbFloatSlow {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(25px, -25px, 20px)
              scale(1.15);
          }
        }

        @keyframes particleFloat {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(18px, -25px, 30px)
              scale(1.4);
          }
        }

        @keyframes particleFloatReverse {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-18px, 20px, 30px)
              scale(1.35);
          }
        }
        @keyframes ctaPulse {

          0%,
          100% {
            opacity: 0.3;

            transform:
              translate(-50%, -50%)
              scale(0.9);
          }

          50% {
            opacity: 0.8;

            transform:
              translate(-50%, -50%)
              scale(1.2);
          }
        }

        @keyframes iconPulse {

          0%,
          100% {
            transform:
              scale(1)
              rotate(0deg);
          }

          50% {
            transform:
              scale(1.08)
              rotate(4deg);
          }
        }

        .cta-icon {
          animation:
            iconPulse
            3s
            ease-in-out
            infinite;
        }

 
        @media (max-width: 640px) {

          .hero-bg-image {
            inset: -15%;

            width: 130%;
            height: 130%;

            object-position: center;

            transform:
              perspective(900px)
              translate3d(60px, 0, -100px)
              rotateY(-5deg)
              scale(1.15);

            transition:
              opacity 1.2s ease,
              transform 4.5s ease;
          }

          .hero-bg-image-active {
            opacity: 0.18;

            transform:
              perspective(900px)
              translate3d(0, 0, 0)
              rotateY(0)
              scale(1.03);
          }

          .hero-bg-image-hidden {
            opacity: 0;

            transform:
              perspective(900px)
              translate3d(-70px, 15px, -130px)
              rotateY(7deg)
              scale(1.12);
          }

          .hero-main-card:hover {
            transform: none;
          }

          .hero-main-card:hover .hero-main-image {
            transform: scale(1.02);
          }

          .hero-floating-right,
          .hero-floating-left {
            display: none;
          }

          .hero-trust-card {
            left: 5px;
            bottom: -25px;
          }

          .hero-rating-card {
            right: 5px;
            top: 20px;
          }

          .hero-image-wrapper {
            animation-duration: 1s;
          }
        }

       

        @media (min-width: 641px) and (max-width: 1024px) {

          .hero-bg-image {
            inset: -10%;

            width: 120%;
            height: 120%;
          }
        }

      

        @media (prefers-reduced-motion: reduce) {

          .hero-bg-image,
          .hero-badge,
          .hero-title,
          .hero-description,
          .hero-benefits,
          .hero-buttons,
          .hero-image-wrapper,
          .hero-floating-left,
          .hero-floating-right,
          .hero-trust-card,
          .hero-rating-card,
          .cta-icon {
            animation: none !important;
            transition: none !important;
          }

          .hero-main-card,
          .hero-main-image {
            transition: none !important;
          }
        }

      `}</style>
    </div>
  );
}