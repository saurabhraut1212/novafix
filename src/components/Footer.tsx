import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">NovaFix</h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Fast on-site repairs at your convenience.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-base text-gray-600 dark:text-gray-400 font-medium">
          <Link href="/#pricing" className="hover:text-gray-900 dark:hover:text-white transition">Pricing</Link>
          <Link href="/#services" className="hover:text-gray-900 dark:hover:text-white transition">Services</Link>
          <Link href="/#faq" className="hover:text-gray-900 dark:hover:text-white transition">FAQ</Link>
          <Link href="/#hero" className="hover:text-gray-900 dark:hover:text-white transition">About</Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm sm:text-base text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} NovaFix. All rights reserved.
      </div>
    </footer>
  );
}
