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
      <body>
        <ThemeProviders>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
