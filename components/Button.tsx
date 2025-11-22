import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  let baseStyles = "transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:scale-105 active:scale-95 hover:shadow-lg";
  
  let variantStyles = "";
  
  if (variant === 'primary') {
    variantStyles = "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 focus:ring-slate-900 dark:focus:ring-white border border-transparent hover:shadow-slate-900/20 dark:hover:shadow-white/20";
  } else if (variant === 'secondary') {
    variantStyles = "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-transparent dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 focus:ring-slate-200 hover:shadow-slate-200/50 dark:hover:shadow-slate-800/50";
  } else if (variant === 'ghost') {
    variantStyles = "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800";
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};