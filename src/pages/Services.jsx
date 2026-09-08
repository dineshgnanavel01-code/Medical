import ServiceCard from "../components/ServiceCard";
import { servicesData as services } from "../data/mockData";

function Services() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20">
      <img
        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=85&w=1920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-25 dark:opacity-10"/>
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white/60 to-blue-50/50 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-slate-950/95" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-600/15" />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-xl font-semibold lowercase tracking-wider text-blue-600 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-950/60 dark:text-blue-400">
            Healthcare Services
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Complete{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              healthcare solutions
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
            Professional healthcare services designed to meet your needs,
            delivered with compassion, technology, and expertise.
          </p>
        </div>
        <div className="mt-14 grid w-full gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-full transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">  
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-teal-400/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:group-hover:border-blue-500/30">
                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10 h-full">
                  <ServiceCard service={service} />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-500/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;