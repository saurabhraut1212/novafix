import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  // In real app: validate + store or forward to backend
  console.log('booking received', body);
  return NextResponse.json({ ok: true, message: 'Booking received' });
}
