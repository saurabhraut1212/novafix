'use client';
import CountUp from 'react-countup';

export default function CountUpStat() {
  return (
    <section className="py-8 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold">Trusted by customers</h3>
        <p className="text-3xl font-bold">
          <CountUp end={5200} duration={3} />+ Devices Fixed
        </p>
      </div>
    </section>
  );
}
