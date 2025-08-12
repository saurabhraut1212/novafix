'use client';
import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';


export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  return (
    <RadixAccordion.Root type="single" collapsible className="space-y-3">
      {items.map((it, i) => (
        <RadixAccordion.Item key={i} value={`item-${i}`} className="border rounded-md">
          <RadixAccordion.Header className="px-4 py-3">
            <RadixAccordion.Trigger className="w-full text-left font-semibold">
              {it.title}
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
            {it.content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
