import { pricing } from '@/data/pricing';

export default function PricingTable() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Price Examples</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3">Device</th>
                <th className="p-3">Issue</th>
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, idx) => (
                <tr key={idx} className="border-b dark:border-gray-700">
                  <td className="p-3">{row.device}</td>
                  <td className="p-3">{row.issue}</td>
                  <td className="p-3 font-semibold">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
