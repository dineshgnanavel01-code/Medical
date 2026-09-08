import React from 'react';

export function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyles = "px-5 py-3 rounded-xl text-sm font-semibold transition flex items-center justify-center cursor-pointer";
  const variants = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20",
    ghost: "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
}

export function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-100 dark:border-slate-800">
        {children}
      </div>
    </div>
  );
}

export function Reveal({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function Empty({ title = "No results found" }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
      <p className="text-base font-semibold text-slate-500">{title}</p>
      <p className="text-sm text-slate-400 mt-1">Try adjusting your search or filter options.</p>
    </div>
  );
}

export function Page({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}