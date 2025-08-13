'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Button from './ui/button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900/60 backdrop-blur border-b dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">NovaFix</Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button >
            <Link href="/#book">Book Repair</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
