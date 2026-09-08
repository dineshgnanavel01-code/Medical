import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {ArrowLeft,CalendarDays,Clock3,UserRound,Mail,FileText,CheckCircle2, Star,} from "lucide-react";

const defaultDoctors = [
  {
    id: "dr-nia-patel",
    name: "Dr. Nia Patel",
    specialty: "Cardiology",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "dr-marco-lin",
    name: "Dr. Marco Lin",
    specialty: "Neurology",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "dr-amara-okafor",
    name: "Dr. Amara Okafor",
    specialty: "General Medicine",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
  },
];

const times = [
  "09:00 AM",
  "10:30 AM",
  "02:00 PM",
  "04:00 PM",
];

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedDoctorFromLibrary = location.state?.doctor;
  const selectedArticle = location.state?.article;

  const [doctor, setDoctor] = useState(
    selectedDoctorFromLibrary?.id || ""
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [success, setSuccess] = useState(false);

  const selectedDoctor =
    selectedDoctorFromLibrary ||
    defaultDoctors.find((item) => item.id === doctor);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctor || !date || !time || !name || !email) {
      return;
    }

    const appointment = {
      id: Date.now(),
      doctor: selectedDoctor?.name,
      doctorId: selectedDoctor?.id,
      specialty: selectedDoctor?.specialty,
      doctorImage: selectedDoctor?.image,
      date,
      time,
      patientName: name,
      patientEmail: email,
      reason,
      appointmentType: "Video consultation",
      duration: "45 minutes",
      status: "Confirmed",
      article: selectedArticle?.title || null,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "healthnest-appointment",
      JSON.stringify(appointment)
    );

    window.dispatchEvent(
      new Event("healthnest-appointment-updated")
    );

    setSuccess(true);
  };

  if (success) {
    return (
      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-slate-50 px-4 py-16 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-10"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <CheckCircle2 size={44} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-900 dark:text-white">
            Appointment Confirmed
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Your appointment with{" "}
            <strong className="text-slate-800 dark:text-slate-200">
              {selectedDoctor?.name}
            </strong>{" "}
            has been successfully booked.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-4 p-4">
              <img
                src={selectedDoctor?.image}
                alt={selectedDoctor?.name}
                className="h-16 w-16 rounded-2xl object-cover"
              />

              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {selectedDoctor?.name}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedDoctor?.specialty}
                </p>

                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-amber-500">
                  <Star size={13} fill="currentColor" />
                  {selectedDoctor?.rating}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4 text-sm dark:border-slate-700">
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p className="mt-1">
                <strong>Time:</strong> {time}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex-1 rounded-2xl bg-emerald-500 px-5 py-3.5 font-bold text-white transition hover:bg-emerald-600"
            >
              Go to Dashboard
            </button>

            <Link
              to="/"
              className="flex-1 rounded-2xl border border-slate-200 px-5 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Back Home
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950 sm:py-16">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
       
        <Link
          to="/health-library"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        >
          <ArrowLeft size={17} />
          Back to Health Library
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-fit rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
          >
            {selectedDoctor ? (
              <>
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-emerald-500">
                    Selected Specialist
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                    {selectedDoctor.name}
                  </h2>

                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    {selectedDoctor.specialty}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-amber-500">
                    <Star size={16} fill="currentColor" />
                    {selectedDoctor.rating} rating
                  </div>
                </div>

                {selectedArticle && (
                  <div className="mt-6 rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      From Health Library
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-slate-800 dark:text-slate-200">
                      {selectedArticle.title}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Choose a Doctor
                </h2>

                <div className="mt-5 space-y-3">
                  {defaultDoctors.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDoctor(item.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                        doctor === item.id
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                          : "border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {item.specialty}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-500">
                Book Appointment
              </p>

              <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                Schedule your visit
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Choose your preferred date and time, then provide your basic
                details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {!selectedDoctor && (
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Doctor
                  </label>

                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    required
                  >
                    <option value="">Select doctor</option>

                    {defaultDoctors.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} — {item.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <CalendarDays size={16} />
                    Date
                  </label>

                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <Clock3 size={16} />
                    Time
                  </label>

                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    required
                  >
                    <option value="">Select time</option>

                    {times.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <UserRound size={16} />
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <Mail size={16} />
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <FileText size={16} />
                  Reason for Visit
                </label>

                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly describe your concern..."
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}