'use client'

import { services } from '@/data/services'
import { useState } from 'react'

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="[perspective:1000px]"
              onClick={() => toggleFlip(i)}
            >
              <div
                className={`relative min-h-[300px] w-full [transform-style:preserve-3d] transition-transform duration-500 cursor-pointer hover:scale-105
                  ${flippedIndex === i ? '[transform:rotateY(180deg)]' : ''}`}
              >
                {/* Front side */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                  <div className="text-7xl mb-6">{s.icon}</div>
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
