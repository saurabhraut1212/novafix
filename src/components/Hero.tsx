'use client';
import Image from 'next/image';
import BookRepairModal from './BookRepairModel';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[75vh] w-full">
      <div className="absolute inset-0">
      <Image
        src="/images/hero.jpg"
        alt="Technician fixing phone"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-50" 
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-semibold max-w-3xl"
        >
          Fast, Reliable on-site repairs within 60 minutes
        </motion.h1>

        <p className="mt-4 text-base sm:text-lg text-indigo-100 max-w-2xl">
          We come to your place, diagnose and fix smartphones & laptops quickly — high quality parts, certified technicians.
        </p>

        <div className="mt-16">
          <BookRepairModal />
        </div>
      </div>
    </section>
  );
}
