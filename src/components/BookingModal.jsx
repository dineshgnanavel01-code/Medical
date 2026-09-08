import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "./UI";

const DOCTORS = [
  { id: "nia", name: "Dr. Nia Patel", specialty: "Cardiology", rating: "4.9", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" },
  { id: "marco", name: "Dr. Marco Lin", specialty: "Neurology", rating: "4.8", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" },
  { id: "amara", name: "Dr. Amara Okafor", specialty: "General medicine", rating: "4.9", image: "https://images.unsplash.com/photo-1594824813511-2d7c0419266a?auto=format&fit=crop&q=80&w=200" },
];

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState("2026-09-10");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [reason, setReason] = useState("");
  const [patientName, setPatientName] = useState("Dinesh");
  const [patientEmail, setPatientEmail] = useState("dinesh@example.com");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-2xl dark:border-slate-800 my-auto"
        >
          {/* Header Banner */}
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

            {/* Step Indicators */}
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

          {/* Modal Body */}
          <div className="grid grid-cols-1 gap-6 bg-slate-950 p-6 lg:grid-cols-3">
            {/* Main Selection Area */}
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
                            selectedDoctor.id === doc.id
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
                    
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-white focus:border-emerald-500 focus:outline-none"
                    />

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["09:00 AM", "10:30 AM", "02:00 PM", "04:00 PM"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-xl border p-3 text-sm font-bold transition ${
                            selectedTime === time
                              ? "border-emerald-500 bg-emerald-950 text-emerald-300"
                              : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Reason for appointment / Symptoms</label>
                      <textarea
                        rows="3"
                        placeholder="Briefly describe your symptoms or reason for visit..."
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
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={patientName} 
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-white focus:border-emerald-500 focus:outline-none" 
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={patientEmail} 
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-white focus:border-emerald-500 focus:outline-none" 
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-6">
                    <CheckCircle2 size={48} className="mx-auto text-emerald-400 mb-3" />
                    <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Your appointment with <span className="text-white font-semibold">{selectedDoctor.name}</span> is successfully confirmed for <span className="text-white font-semibold">{selectedDate}</span> at <span className="text-white font-semibold">{selectedTime}</span>.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons inside Modal */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-4">
                {step > 1 && step < 4 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="rounded-xl border border-slate-800 px-4 py-2 text-sm font-bold text-slate-300 hover:bg-slate-900"
                  >
                    Back
                  </button>
                )}
                <div className="ml-auto">
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 text-sm font-black text-white"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={onClose}
                      className="bg-emerald-500 px-6 py-2 text-sm font-black text-white"
                    >
                      Close
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Booking Summary Sidebar */}
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
                    <img src={selectedDoctor.image} alt="" className="h-8 w-8 rounded-lg object-cover shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Selected Clinician</p>
                      <p className="text-sm font-bold text-white">{selectedDoctor.name}</p>
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