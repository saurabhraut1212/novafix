'use client';
import Image from 'next/image';
import BookRepairModal from './BookRepairModel';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Fast, reliable on-site repairs — <span className="underline">within 60 minutes</span>
        </motion.h1>
        <p className="mt-3 text-sm sm:text-base text-indigo-100/90 max-w-2xl mx-auto">
          We come to your place, diagnose and fix smartphones & laptops quickly — high-quality parts, certified technicians.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <BookRepairModal />
        </div>

        <div className="mt-8">
          <div className="relative w-full h-44 sm:h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero.webp"
              alt="Technician fixing phone"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
