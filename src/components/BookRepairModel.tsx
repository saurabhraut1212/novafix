'use client';
import { useState } from 'react';
import Button from './ui/button';
import { Dialog } from './ui/dialog';

export default function BookRepairModal() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    time: ''
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // simple local validation
    if (!form.name || !form.phone) {
      alert('Please enter name and phone');
      return;
    }
    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  }

  return (
    <Dialog
      trigger={<Button className="bg-yellow-400 text-black">Book Repair</Button>}
    >
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-2">Book a Repair</h3>
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="w-full p-2 border rounded" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>
            <input className="w-full p-2 border rounded" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>
            <input className="w-full p-2 border rounded" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}/>
            <input className="w-full p-2 border rounded" placeholder="Device (e.g. iPhone 13)" value={form.device} onChange={e => setForm({ ...form, device: e.target.value })}/>
            <input className="w-full p-2 border rounded" placeholder="Issue (e.g. screen crack)" value={form.issue} onChange={e => setForm({ ...form, issue: e.target.value })}/>
            <input className="w-full p-2 border rounded" placeholder="Preferred time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}/>
            <div className="flex justify-end gap-2">
              <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold">Thanks — request received</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Our technician will contact you shortly.</p>
        </div>
      )}
    </Dialog>
  );
}
