'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="novafix-theme"
    >
      {children}
    </ThemeProvider>
  );
}

export default ThemeProviders;