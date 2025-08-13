'use client';
import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium shadow-sm transition',
        'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700',
        className
      )}
    >
      {children}
    </button>
  );
}
