'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 dark:bg-red-900 text-center">
      <h2 className="text-2xl font-semibold text-red-600">Something went wrong!</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Try again
      </button>
    </div>
  );
}
