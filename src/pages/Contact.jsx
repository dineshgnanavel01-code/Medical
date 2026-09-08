import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {MapPin,Phone,Mail,Send,CheckCircle2,ArrowRight,Clock,AlertCircle,ChevronDown,} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Visit Us",
      text: "123 Healthcare Avenue, New York, NY 10001",
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+1 800 123 4567",
      iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "support@medicare.com",
      iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  const workingHours = [
    { days: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { days: "Saturday", time: "9:00 AM - 5:00 PM" },
    { days: "Sunday", time: "Emergency Only (24/7)" },
  ];

  const faqs = [
    {
      q: "How do I book an appointment with a specialist?",
      a: "You can navigate to our Doctors page, select your preferred specialist, and click on 'Book Appointment' to choose an available date and time slot.",
    },
    {
      q: "What should I bring for my first visit?",
      a: "Please bring a valid photo ID, your insurance card, a list of current medications, and any past medical records or test results relevant to your visit.",
    },
    {
      q: "Do you accept walk-in patients?",
      a: "While we recommend booking in advance to minimize wait times, urgent care and emergency services accommodate walk-ins 24/7.",
    },
    {
      q: "How can I access my medical test results?",
      a: "Test results are uploaded securely to your patient portal profile within 24 to 48 hours after your test is completed.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 py-20 transition-colors duration-500 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

      <motion.div
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/5"
        animate={{
          x: [0, 70, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>

      <motion.div
        className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/5"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>


      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8">
            <div>
          
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-100 px-4 py-2 text-sm font-semibold lowercase tracking-wider text-blue-600 dark:border-blue-900/50 dark:bg-blue-500/10 dark:text-blue-400"
              >
                <Mail size={15} />
                Contact & Support
              </motion.div>

           
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-5xl">
                We're here to{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  help
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 transition-colors dark:text-slate-400 sm:text-lg">
                Have a question about appointments, doctors, or our services?
                Send us a message or review our clinic info below.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-800"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-50/80 to-transparent transition-transform duration-500 group-hover:translate-x-0 dark:from-blue-500/10" />

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                    >
                      <Icon size={21} />
                    </motion.div>

                    <div className="relative">
                      <p className="font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.text}
                      </p>
                    </div>

                    <motion.div
                      className="relative ml-auto text-slate-300 dark:text-slate-600"
                      whileHover={{ x: 5 }}>
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

         
            <div className="grid gap-6 sm:grid-cols-2">
              
          
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
                <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400">
                  <Clock size={20} />
                  <h3 className="font-bold text-slate-900 dark:text-white">Working Hours</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  {workingHours.map((wh, idx) => (
                    <li key={idx} className="flex justify-between border-b border-slate-100 pb-1.5 dark:border-slate-800/60 last:border-none last:pb-0">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{wh.days}</span>
                      <span>{wh.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200/70 bg-red-50/50 p-5 shadow-sm backdrop-blur-md dark:border-red-900/40 dark:bg-red-950/20">
                <div className="flex items-center gap-2.5 mb-3 text-red-600 dark:text-red-400">
                  <AlertCircle size={20} />
                  <h3 className="font-bold text-slate-900 dark:text-white">Emergency Contact</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  Immediate assistance is available 24/7 for critical medical needs.
                </p>
                <a
                  href="tel:911"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-700">
                  <Phone size={16} />
                  Call 911 / Emergency Line
                </a>
              </div>

            </div>

          </motion.div>

   
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1200px" }}
            className="relative" >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 blur-2xl dark:from-blue-500/5 dark:via-cyan-400/5 dark:to-indigo-500/5" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20 sm:p-8">

              <motion.div
                className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}/>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="flex min-h-[500px] flex-col items-center justify-center text-center" >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 12, delay: 0.2 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                      <CheckCircle2 size={42} />
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 text-2xl font-bold text-slate-900 dark:text-white" >
                      Message Sent!
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 max-w-sm text-slate-500 dark:text-slate-400">
                      Thank you for contacting us. Our support team will get
                      back to you as soon as possible.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5">
                    <div className="mb-7">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Send us a message
                      </h2>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Fill out the form and we'll get back to you shortly.
                      </p>
                    </div>

                    <FormField label="Name" placeholder="Your name" required />
                    <FormField label="Email" type="email" placeholder="you@example.com" required />
                    <FormField label="Subject" placeholder="How can we help?" required />

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }} >
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                      </label>
                      <motion.textarea
                        required
                        rows="5"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
                        placeholder="Write your message..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/30" >
                      <Send size={17} />
                      Send Message
                      <motion.span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </motion.span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

  
        <div className="mt-24 max-w-full mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Got questions? We have got answers about our clinic procedures and care.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 transition-colors dark:text-white">
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600 dark:text-blue-400 shrink-0 ml-4"  >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }} >
                        <div className="border-t border-slate-100 p-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


function FormField({ label, type = "text", placeholder, required = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} >
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <motion.input
        required={required}
        type={type}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
        placeholder={placeholder} />
    </motion.div>
  );
}

export default Contact;