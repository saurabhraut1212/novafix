'use client';
import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

interface DialogProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({ children, trigger, onOpenChange }: DialogProps) {
  return (
    <RadixDialog.Root onOpenChange={onOpenChange}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
        />
        <RadixDialog.Content
          className={clsx(
            'fixed left-1/2 top-[80px] z-50 w-[95%] max-w-lg -translate-x-1/2',
            'rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg focus:outline-none',
            'animate-in fade-in-50 zoom-in-95 duration-200'
          )}
        >
          {children}
          <RadixDialog.Close
            className="absolute right-3 top-3 rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            ✕
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
