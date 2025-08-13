'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  
  useEffect(() => {
    if (mounted) {
      console.log('Theme changed to:', theme);
      console.log('Resolved theme:', resolvedTheme);
      console.log('HTML classList:', document.documentElement.classList.toString());
      console.log('Body background:', getComputedStyle(document.body).backgroundColor);
    }
  }, [theme, resolvedTheme, mounted]);
  
  if (!mounted) return null;
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    
    </div>
  );
}
