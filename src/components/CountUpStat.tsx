'use client';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function CountUpStat() {
  const stats = [
    { end: 5200, label: 'Devices Fixed' },
    { end: 3200, label: 'Happy Customers' },
    { end: 12, label: 'Years Experience' },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-white"
        >
          Trusted by Customers
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <p className="text-5xl font-bold text-white">
                <CountUp end={stat.end} duration={2.5} separator="," />+
              </p>
              <p className="mt-2 text-lg text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
