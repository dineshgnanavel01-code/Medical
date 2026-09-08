import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {CalendarDays,Clock3,UserRound,Stethoscope,CheckCircle2,ArrowLeft,ArrowRight,Star,Calendar,Clock,X,} from "lucide-react";

const DOCTORS = [
  { id: "nia", name: "Dr. Nia Patel", specialty: "Cardiologist", rating: "4.9", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" },
  { id: "marco", name: "Dr. Marco Lin", specialty: "Neurologist", rating: "4.8", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" },
  { id: "amara", name: "Dr. Amara Okafor", specialty: "General medicine", rating: "4.9", image: "https://images.unsplash.com/photo-1594824813511-2d7c0419266a?auto=format&fit=crop&q=80&w=200" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function AppointmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [reason, setReason] = useState("");
  const [patientName, setPatientName] = useState("Dinesh");
  const [patientEmail, setPatientEmail] = useState("dinesh@example.com");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !selectedDoctor) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    if (step === 3 && (!patientName || !patientEmail)) return;
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-2xl dark:border-slate-800 my-auto"
        >
        
          <div className="relative bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 p-6 sm:p-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              Simple. Secure. Yours.
            </span>
            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">
              Book a little <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">peace of mind.</span>
            </h2>

           
            <div className="mt-6 flex items-center gap-3">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-all ${
                      step === s
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 scale-110"
                        : step > s
                        ? "bg-emerald-900/60 text-emerald-300 border border-emerald-500/30"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {step > s ? <CheckCircle2 size={15} /> : s}
                  </div>
                  {s < 4 && <div className={`h-0.5 w-8 sm:w-16 ${step > s ? "bg-emerald-500" : "bg-slate-800"}`} />}
                </div>
              ))}
            </div>
          </div>

       
          <div className="grid grid-cols-1 gap-6 bg-slate-950 p-6 lg:grid-cols-3">
           
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
               
                {step === 1 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 1 • Choose your clinician</p>
                    <h3 className="text-xl font-bold text-white mt-1 mb-4">Who would you like to see?</h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {DOCTORS.map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedDoctor(doc)}
                          className={`group cursor-pointer rounded-2xl border p-4 transition-all ${
                            selectedDoctor?.id === doc.id
                              ? "border-emerald-500 bg-emerald-950/30 shadow-lg shadow-emerald-500/10"
                              : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={doc.image} alt={doc.name} className="h-12 w-12 rounded-xl object-cover" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-white truncate">{doc.name}</h4>
                              <p className="text-xs text-slate-400">{doc.specialty}</p>
                              <div className="mt-1 flex items-center gap-1 text-xs text-amber-400 font-medium">
                                <Star size={12} fill="currentColor" /> {doc.rating}
                              </div>
                            </div>
                            <ArrowRight size={18} className="text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 2 • Date, Time & Reason</p>
                    <h3 className="text-xl font-bold text-white mt-1 mb-4">Select slot & consultation reason</h3>
                    
                    <div className="relative mb-4">
                      <CalendarDays size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                      <input
                        type="date"
                        value={selectedDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-white focus:border-emerald-500 focus:outline-none text-sm"
                      />
                    </div>

                    <label className="block text-xs font-semibold text-slate-400 mb-2">Select Available Time Slot</label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-xs font-bold transition ${
                            selectedTime === time
                              ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                              : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          <Clock3 size={14} />
                          {time}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Reason for Visit / Symptoms</label>
                      <textarea
                        rows="3"
                        placeholder="Describe your reason for consultation..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-white focus:border-emerald-500 focus:outline-none text-sm resize-none"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 3 • Patient Details</p>
                    <h3 className="text-xl font-bold text-white mt-1 mb-4">Confirm contact information</h3>
                    <div className="space-y-3">
                      <div className="relative">
                        <UserRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          value={patientName} 
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-white focus:border-emerald-500 focus:outline-none text-sm" 
                        />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={patientEmail} 
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-white focus:border-emerald-500 focus:outline-none text-sm" 
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-6">
                    <CheckCircle2 size={48} className="mx-auto text-emerald-400 mb-3" />
                    <h3 className="text-2xl font-bold text-white">Appointment Confirmed!</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Your consultation with <span className="text-white font-semibold">{selectedDoctor?.name}</span> ({selectedDoctor?.specialty}) is successfully booked for <span className="text-white font-semibold">{selectedDate}</span> at <span className="text-white font-semibold">{selectedTime}</span>.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-4">
                {step > 1 && step < 4 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-800 px-4 py-2 text-sm font-bold text-slate-300 hover:bg-slate-900"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                )}
                <div className="ml-auto">
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl bg-emerald-500 px-6 py-2 text-sm font-black text-white transition hover:bg-emerald-600"
                    >
                      Done / Close
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">Your Booking</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400">Date & Time</p>
                      <p className="text-sm font-bold text-white">{selectedDate} • {selectedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400">Estimated duration</p>
                      <p className="text-sm font-bold text-white">45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {selectedDoctor?.image && (
                      <img src={selectedDoctor.image} alt="" className="h-8 w-8 rounded-lg object-cover shrink-0" />
                    )}
                    <div>
                      <p className="text-xs text-slate-400">Selected Clinician</p>
                      <p className="text-sm font-bold text-white">{selectedDoctor?.name || "No doctor selected"}</p>
                      <p className="text-[11px] text-emerald-400">{selectedDoctor?.specialty}</p>
                    </div>
                  </div>
                  {reason && (
                    <div className="border-t border-slate-800 pt-3">
                      <p className="text-xs text-slate-400">Reason for visit</p>
                      <p className="text-xs text-slate-200 mt-1 italic line-clamp-2">"{reason}"</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-6">
                <p className="text-[11px] text-slate-400">
                  You'll receive a confirmation email with your private video link.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}