
import { useNavigate } from "react-router-dom";
import {ArrowRight, CalendarDays,MapPin,Star,} from "lucide-react";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/doctors/${doctor.id}`);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-emerald-800">

      
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85";
          }}/>

   
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

      
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur-md dark:bg-slate-900/90 dark:text-emerald-400">
          ✓ Verified
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-800 shadow-lg backdrop-blur-md dark:bg-slate-900/90 dark:text-white">
          <Star
            size={14}
            className="fill-amber-400 text-amber-400"
          />
          {doctor.rating || "4.9"}
        </div>
      </div>

    
      <div className="p-5">

   
        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {doctor.name}
        </h3>

      
        <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {doctor.specialization}
        </p>

        {doctor.location && (
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={15} />
            <span>{doctor.location}</span>
          </div>
        )}

    
        {doctor.experience && (
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <CalendarDays size={15} />
            <span>{doctor.experience} experience</span>
          </div>
        )}

    
        <div className="my-5 h-px bg-slate-100 dark:bg-slate-800" />

       
        <button
          type="button"
          onClick={handleViewProfile}
          className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30">
          View Profile

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </button>

      </div>
    </article>
  );
}

export default DoctorCard;
