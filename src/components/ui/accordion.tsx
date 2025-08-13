'use client';
import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  return (
    <RadixAccordion.Root type="single" collapsible className="space-y-4">
      {items.map((it, i) => (
        <RadixAccordion.Item
          key={i}
          value={`item-${i}`}
          className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden transition-all"
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger
              className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              {it.title}
              <ChevronDown className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content
            className="px-5 pb-4 text-gray-600 dark:text-gray-300 text-sm mt-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          >
            {it.content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
