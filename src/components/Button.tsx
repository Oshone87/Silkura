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
  
  const baseClasses = "rounded-full font-bold transition-all flex items-center justify-center transform hover:scale-105 shadow-sm";
  
  const variants = {
    primary: "bg-primary hover:bg-white text-slate-900 border border-transparent shadow-lg",
    outline: "bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900",
    ghost: "bg-transparent text-slate-900 hover:bg-primary/20 dark:text-white dark:hover:bg-slate-800"
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg"
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
