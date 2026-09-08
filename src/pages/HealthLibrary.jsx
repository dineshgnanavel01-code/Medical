import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, BookOpen, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const healthArticles = [
  {
    id: 1,
    title: "What your body is trying to tell you about sleep",
    category: "Wellbeing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "A calmer way to prepare for your next appointment",
    category: "Care guide",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Small habits that support a healthy heart",
    category: "Prevention",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HealthLibrary() {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return healthArticles;
    }

    return healthArticles.filter((article) =>
      `${article.title} ${article.category}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 dark:bg-slate-950">
     
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400"
            >
              <BookOpen size={13} />
              Health Library
            </motion.div>

        
            <h2 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-slate-900 sm:text-6xl dark:text-white">
              Less noise.
              <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                More useful health.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Clear, considered guides for the questions you’re already asking. Explore trusted health information, practical care guides, and everyday wellness tips.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative w-full max-w-sm"
          >
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors duration-300"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search the library"
                aria-label="Search the health library"
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white/90 pl-11 pr-5 text-sm font-medium text-slate-900 outline-none shadow-sm backdrop-blur-xl transition-all duration-300 placeholder:text-slate-400 hover:border-emerald-200 hover:shadow-md focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-emerald-800 dark:focus:border-emerald-600"
              />
            </motion.div>

            {search && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 px-2 text-[11px] font-semibold text-slate-400"
              >
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "article" : "articles"} found
              </motion.p>
            )}
          </motion.div>
        </motion.div>

     
        <AnimatePresence mode="wait">
          {filteredArticles.length > 0 ? (
            <motion.div
              key="articles"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={cardVariants}
                  layout
                  className={index === 0 ? "lg:col-span-2" : ""}
                >
                  <Link
                    to={`/health-library/${article.id}`}
                    className={`group relative block h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_25px_60px_rgba(12,55,63,0.14)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] ${
                      index === 0 ? "lg:grid lg:grid-cols-2" : ""
                    }`}
                  >
                   
                    <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

                    <div className={`relative overflow-hidden ${index === 0 ? "h-64 lg:h-full" : "h-56"}`}>
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                    
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700 shadow-lg backdrop-blur-md dark:bg-slate-950/80 dark:text-emerald-400"
                      >
                        {article.category}
                      </motion.span>

                  
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-slate-950/65 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                        <Clock3 size={12} />
                        {article.readTime}
                      </div>

                    
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-600 shadow-xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        <ArrowRight size={17} />
                      </motion.div>
                    </div>

                    
                    <div className="flex flex-col p-6 sm:p-7">
                      <div className="flex-1">
                        <h3 className="text-2xl font-black leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                          {article.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                          Thoughtful context and simple next steps, from people who care about getting it right.
                        </p>
                      </div>

                     
                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Read article
                        </span>

                        <motion.span
                          whileHover={{ x: 4 }}
                          className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-950/60 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white"
                        >
                          <ArrowRight size={15} />
                        </motion.span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="mt-12 rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-14 text-center dark:border-slate-700 dark:bg-slate-900/50"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
              >
                <Search size={25} />
              </motion.div>

              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Try searching for sleep, care, or heart health.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-500/30"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}