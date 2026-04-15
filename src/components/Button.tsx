import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseClasses = "rounded-full font-bold transition-all duration-300 flex items-center justify-center transform hover:scale-105 relative overflow-hidden";
  
  const variants = {
    primary: "gradient-primary text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]",
    outline: "bg-transparent border-2 border-primary text-slate-900 hover:bg-primary hover:text-white dark:border-primary-light dark:text-white dark:hover:bg-primary dark:hover:text-white",
    ghost: "bg-transparent text-slate-900 hover:bg-primary/15 dark:text-white dark:hover:bg-primary/20"
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm tracking-wide",
    md: "px-8 py-3.5 tracking-wide",
    lg: "px-10 py-4 text-lg tracking-wide"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
