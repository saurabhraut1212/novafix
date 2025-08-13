'use client'

import { services } from '@/data/services'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Services() {
  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <Card
              key={i}
              className="
                min-h-[300px] 
                shadow-lg 
                hover:shadow-xl 
                transition-transform 
                hover:-translate-y-1 
                bg-white 
                dark:bg-gray-800 
                border-none
              "
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="text-7xl mb-4">{s.icon}</div>
                <CardTitle className="text-xl font-semibold">{s.title}</CardTitle>
                <CardDescription className="text-base mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {s.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
