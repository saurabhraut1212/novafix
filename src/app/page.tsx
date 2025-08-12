import Hero from '@/components/Hero';
import CountUpStat from '@/components/CountUpStat';
import Services from '@/components/Services';
import PricingTable from '@/components/PricingTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CountUpStat />
      <Services />
      <PricingTable />
      <FAQ />
      <Footer />
    </main>
  );
}
