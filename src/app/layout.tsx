import './globals.css';
import ThemeProviders from '@/components/ThemeProviders';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'NovaFix - Fast Device Repairs',
  description: 'On-site smartphone & laptop repairs in 60 minutes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-200">
        <ThemeProviders>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
