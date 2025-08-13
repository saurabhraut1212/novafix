'use client';

import { useState } from 'react';
import Button from './ui/button';
import { Dialog } from './ui/dialog';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  device: yup.string().required('Device is required'),
  issue: yup.string().required('Issue is required'),
  time: yup.string().required('Preferred time is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function BookRepairModal() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) ,
  });

  const onSubmit = async (data: FormData) => {
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

  return (
    <Dialog
      trigger={<Button className="bg-yellow-400 text-black">Book Repair</Button>}
    >
      {!submitted ? (
        <>
          <h3 className="text-xl font-semibold mb-2">Book a Repair</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                {...register('name')}
                className="w-full p-2 border rounded"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('email')}
                className="w-full p-2 border rounded"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('phone')}
                className="w-full p-2 border rounded"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('device')}
                className="w-full p-2 border rounded"
                placeholder="Device (e.g. iPhone 13)"
              />
              {errors.device && (
                <p className="text-red-500 text-sm">{errors.device.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('issue')}
                className="w-full p-2 border rounded"
                placeholder="Issue (e.g. screen crack)"
              />
              {errors.issue && (
                <p className="text-red-500 text-sm">{errors.issue.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('time')}
                className="w-full p-2 border rounded"
                placeholder="Preferred time"
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold">Thanks — request received</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Our technician will contact you shortly.
          </p>
        </div>
      )}
    </Dialog>
  );
}
