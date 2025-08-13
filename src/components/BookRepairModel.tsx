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
        className="px-8 py-3 text-lg font-semibold rounded-lg
                bg-yellow-400 text-black
                transition-all duration-200
                hover:bg-yellow-500
                active:bg-yellow-600
                dark:hover:bg-yellow-300
                focus:outline-none focus:ring-2 focus:ring-yellow-300"
    >
        Book Repair
    </button>
}
    >
        <div className="max-h-[90vh] overflow-y-auto px-2 sm:px-4">
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">Book a Repair</h3>

          <form
           onSubmit={handleSubmit(
           onSubmit, 
           () => setGlobalError('Please fill all required fields correctly.') 
         )}
         className="space-y-4"
     >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Name <span className="text-red-500">*</span></label>
              <input {...register('name')} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Enter your name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Email <span className="text-red-500">*</span></label>
              <input {...register('email')} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Phone <span className="text-red-500">*</span></label>
             <input
                type="tel"
                {...register('phone')}
                onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="10-digit phone number"
                />
            </div>

           <div className="flex gap-4">
            {/* Device Type */}
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Device Type <span className="text-red-500">*</span>
                </label>
                <select
                {...register('deviceType')}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Device Model <span className="text-red-500">*</span>
                </label>
                <select
                {...register('deviceModel')}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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

       
            <div className="flex gap-4">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Select Date <span className="text-red-500">*</span>
                </label>
                <input
                type="date"
                {...register('date')}
                min={new Date().toISOString().split('T')[0]} 
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
            </div>

            {/* Slot Selection */}
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Select Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                {...register('slot')}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Issue <span className="text-red-500">*</span></label>
              <input {...register('issue')} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Describe the issue" />
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
         <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Thanks — request received</h3>
         <p className="text-gray-700 dark:text-gray-300">
          Our technician will contact you shortly.
         </p>
         </div>
      )}
      </div>
    </Dialog>
  );
}
