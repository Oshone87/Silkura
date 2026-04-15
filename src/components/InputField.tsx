import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputField({ label, error, className = '', id, ...props }: InputFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </label>
      <input
        id={inputId}
        className={`px-4 py-3.5 rounded-xl border bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-slate-400
        ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' : 'border-primary/20 hover:border-primary/40'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-400 font-medium">{error}</span>}
    </div>
  );
}
