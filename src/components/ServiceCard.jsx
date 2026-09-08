import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div className="flex h-full flex-col p-7">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-blue-950/50">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {service.title}
      </h3>

   
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {service.description}
      </p>
      <button
        onClick={handleLearnMore}
        className="group/btn mt-6 inline-flex w-fit items-center gap-2 font-bold text-blue-600 transition-all duration-300 hover:text-cyan-600 dark:text-blue-400 dark:hover:text-cyan-400">
        Learn More
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </button>
    </div>
  );
}

export default ServiceCard;