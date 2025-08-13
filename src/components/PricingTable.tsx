import { pricing } from '@/data/pricing';

export default function PricingTable() {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Prices</h2>
        
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border-collapse overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-300 to-indigo-400 text-white">
                <th className="p-4 text-left font-semibold">Device</th>
                <th className="p-4 text-left font-semibold">Issue</th>
                <th className="p-4 text-left font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`${
                    idx % 2 === 0 
                      ? 'bg-white dark:bg-gray-800' 
                      : 'bg-gray-50 dark:bg-gray-700'
                  } hover:bg-blue-50 dark:hover:bg-gray-600 transition`}
                >
                  <td className="p-4 font-medium text-gray-900 dark:text-white">{row.device}</td>
                  <td className="p-4 text-gray-700 dark:text-white">{row.issue}</td>
                  <td className="p-4 font-bold text-blue-600 dark:text-blue-400">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
