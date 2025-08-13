import Hero from '@/components/Hero';
import CountUpStat from '@/components/CountUpStat';
import Services from '@/components/Services';
import PricingTable from '@/components/PricingTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div id="hero"><Hero /></div>
      <div id="stats"><CountUpStat /></div>
      <div id="services"><Services /></div>
      <div id="pricing"><PricingTable /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </main>
  );
}
