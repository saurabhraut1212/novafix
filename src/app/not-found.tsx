import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">404</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Page not found</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Go Home
      </Link>
    </div>
  );
}
