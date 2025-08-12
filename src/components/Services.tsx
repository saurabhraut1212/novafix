'use client';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <article key={i} className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm transform hover:-translate-y-1 transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
