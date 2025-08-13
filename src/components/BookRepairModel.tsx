'use client';

import { useState, useMemo } from 'react';
import { Dialog } from './ui/dialog';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { deviceOptions, timeSlots } from '../data/devices';



// Validation Schema
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone must be 10 digits').required(),
  deviceType: yup.string().required(),
  deviceModel: yup.string().required(),
  issue: yup.string().required(),
  date: yup.string().required('Date is required'),
  slot: yup.string().required('Slot is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function BookRepairModal() {
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [deviceType, setDeviceType] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const modelsForSelectedType = useMemo(() => {
    return deviceType ? deviceOptions[deviceType] || [] : [];
  }, [deviceType]);

  const onSubmit = async (data: FormData) => {
    // Show one global error message if any field invalid
    if (Object.keys(errors).length > 0) {
      setGlobalError('Please fill all required fields correctly.');
      return;
    }
    setGlobalError('');

    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      toast.success('Booking submitted successfully!');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Submission failed. Please try again.');
    }
  };

  const handleClose = () => {
    reset();
    setSubmitted(false);
    setGlobalError('');
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
      trigger={
        <button
          className="px-8 py-3 text-lg font-semibold border border-yellow-400 text-yellow-400 rounded-lg
                     bg-transparent transition-all duration-200
                     hover:bg-yellow-400 hover:text-black
                     active:bg-yellow-500 active:text-black
                     focus:outline-none focus:ring-1 focus:ring-yellow-300"
        >
          Book Repair
        </button>
      }
    >
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-2 text-center">Book a Repair</h3>

          <form
           onSubmit={handleSubmit(
           onSubmit, // ✅ runs if validation passes
           () => setGlobalError('Please fill all required fields correctly.') // ✅ runs if validation fails
         )}
         className="space-y-4"
     >
            <div>
              <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
              <input {...register('name')} className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>

            <div>
              <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
              <input {...register('email')} className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone <span className="text-red-500">*</span></label>
             <input
                type="tel"
                {...register('phone')}
                onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                className="w-full p-2 border rounded"
                placeholder="10-digit phone number"
                />
            </div>

           <div className="flex gap-4">
            {/* Device Type */}
            <div className="flex-1">
                <label className="block text-sm font-medium">
                Device Type <span className="text-red-500">*</span>
                </label>
                <select
                {...register('deviceType')}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
                >
                <option value="">Select device type</option>
                {Object.keys(deviceOptions).map((type) => (
                    <option key={type} value={type}>
                    {type}
                    </option>
                ))}
                </select>
            </div>

            {/* Device Model */}
            <div className="flex-1">
                <label className="block text-sm font-medium">
                Device Model <span className="text-red-500">*</span>
                </label>
                <select
                {...register('deviceModel')}
                className="w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
                >
                <option value="">Select model</option>
                {modelsForSelectedType.map((model) => (
                    <option key={model} value={model}>
                    {model}
                    </option>
                ))}
                </select>
            </div>
            </div>

           {/* Date & Slot Selection in Single Row */}
            <div className="flex gap-4">
            {/* Date Selection */}
            <div className="flex-1">
                <label className="block text-sm font-medium">
                Select Date <span className="text-red-500">*</span>
                </label>
                <input
                type="date"
                {...register('date')}
                min={new Date().toISOString().split('T')[0]} // Prevent past dates
                className="w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
                />
            </div>

            {/* Slot Selection */}
            <div className="flex-1">
                <label className="block text-sm font-medium">
                Select Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                {...register('slot')}
                className="w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
                >
                <option value="">Select a slot</option>
                {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                    {slot}
                    </option>
                ))}
                </select>
            </div>
            </div>


            <div>
              <label className="block text-sm font-medium">Issue <span className="text-red-500">*</span></label>
              <input {...register('issue')} className="w-full p-2 border rounded" placeholder="Describe the issue" />
            </div>

          

               {globalError && (
            <p className="text-red-500 text-sm mb-3 text-center">{globalError}</p>
          )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded bg-indigo-600 text-white shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </>
      ) : (
         <div className="flex flex-col items-center justify-center min-h-[25vh] text-center">
         <h3 className="text-2xl font-semibold mb-2">Thanks — request received</h3>
         <p className="text-gray-600 dark:text-gray-300">
          Our technician will contact you shortly.
         </p>
         </div>
      )}
    </Dialog>
  );
}
