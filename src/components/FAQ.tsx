'use client';
import { faq } from '@/data/faq';
import { Accordion } from './ui/accordion';

export default function FAQ() {
  const items = faq.map(f => ({ title: f.q, content: f.a }));
  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently asked questions</h2>
        <Accordion items={items} />
      </div>
    </section>
  );
}
