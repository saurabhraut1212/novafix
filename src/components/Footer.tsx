export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t dark:border-gray-800">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} NovaFix — Fast on-site repairs
      </div>
    </footer>
  );
}
