'use client';
import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

export function Dialog({ children, trigger }: { children: React.ReactNode; trigger: React.ReactNode }) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-black/50" />
        <RadixDialog.Content
          className={clsx(
            'fixed left-1/2 top-1/2 w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 bg-white dark:bg-gray-800'
          )}
        >
          {children}
          <RadixDialog.Close className="absolute right-3 top-3 rounded-md px-2 py-1">✕</RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
