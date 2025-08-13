'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Button from './ui/button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900/60 backdrop-blur border-b dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        
        <Link href="/" className="font-bold text-3xl tracking-tight">
          NovaFix
        </Link>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="text-xl px-5 py-2">
            <Link href="/#book">Book Repair</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
