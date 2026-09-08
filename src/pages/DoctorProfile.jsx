import { ArrowRight } from 'lucide-react';
import { Link, useParams } from "react-router-dom";
import {ArrowLeft,MapPin,GraduationCap,Wallet,Clock,Star} from "lucide-react";
import { doctorsData as doctors } from "../data/mockData";

function DoctorProfile() {
  const { id } = useParams();

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  if (!doctor) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-text-black px-4 text-center dark:bg-slate-950">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl font-bold text-black dark:text-black">
            Doctor not found
          </h1>

          <Link
            to="/doctors"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
            <ArrowLeft size={18} />
            Back to Doctors
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-8 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:py-12 lg:py-16">

     
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Link
            to="/doctors"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400">
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"/>
            Back to Doctors
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[450px] overflow-hidden bg-slate-100 dark:bg-slate-800">

              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85";
                }}/>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        
              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-bold text-emerald-700 shadow-xl backdrop-blur-md dark:bg-slate-900/90 dark:text-emerald-400">
                ✓ Verified Doctor
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    doctor.status === "Available"
                      ? "bg-emerald-400"
                      : "bg-amber-400"
                  }`}/>
                {doctor.status}
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow-xl backdrop-blur-md dark:bg-slate-900/95 dark:text-white">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"/>
                {doctor.rating}
              </div>
            </div>
            <div className="p-7 sm:p-9 lg:p-12">

              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
                {doctor.specialty}
              </span>
       
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                {doctor.name}
              </h1>
              <p className="mt-3 text-base font-semibold text-slate-500 dark:text-slate-400">
                {doctor.qualification}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-2 text-sm font-bold text-yellow-600 dark:bg-yellow-950/30 dark:text-yellow-400">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {doctor.rating}
                </div>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {doctor.reviews} reviews
                </span>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                      {doctor.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Experience
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Consultation Fee
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                      ${doctor.fee}
                    </p>
                  </div>
                </div>

      
                <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-600 dark:bg-slate-900 dark:text-emerald-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                      Availability
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                      {doctor.availability}
                    </p>
                  </div>
                </div>

              </div>

            
              <div className="my-8 h-px bg-slate-200 dark:bg-slate-800" />

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                About Doctor
              </h2>

              <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                {doctor.about}
              </p>
              <Link
                to={`/booking/${doctor.id}`}
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl">
                Book Appointment
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </div>


        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
              ✓
            </div>
            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              Verified Professional
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Qualified and trusted healthcare provider
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
              <Clock size={20} />
            </div>
            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              Flexible Availability
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Convenient appointment scheduling
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
              <Star size={20} />
            </div>
            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              Highly Rated
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Trusted by hundreds of patients
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DoctorProfile;