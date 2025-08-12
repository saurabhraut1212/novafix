import './globals.css';
import ThemeProviders from '@/components/ThemeProviders';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'NovaFix - Fast Device Repairs',
  description: 'On-site smartphone & laptop repairs in 60 minutes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviders>
          <Navbar />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
