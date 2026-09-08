import { ArrowLeft, CheckCircle2, CalendarDays } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../data/mockData";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(
    (item) => String(item.id) === String(id)
  );

  if (!service) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Service Not Found
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            The healthcare service you are looking for does not exist.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/services")}
          className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400">
          <ArrowLeft size={18} />
          Back to Services
        </button>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-12 text-white sm:px-10 lg:px-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-4xl backdrop-blur">
                {service.icon}
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                  Healthcare Service
                </span>

                <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_320px] lg:p-14">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                About This Service
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  What You Can Expect
                </h3>

                {[
                  "Professional and experienced healthcare specialists",
                  "Personalized care based on your individual needs",
                  "Modern healthcare technology and facilities",
                  "Secure and comfortable patient experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-emerald-500"/>
                    <span className="text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="h-fit rounded-3xl border border-blue-100 bg-blue-50/70 p-6 dark:border-blue-900/50 dark:bg-blue-950/30">

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Need This Service?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Book an appointment with one of our qualified healthcare
                professionals.
              </p>

              <Link
                to="/doctors"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700">
                <CalendarDays size={18} />
                Book Appointment
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;