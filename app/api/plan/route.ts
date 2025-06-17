import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { destination, days, vibe } = await request.json()
  const plan = `Your ${days}-day ${vibe} trip to ${destination}`
  return NextResponse.json({ plan })
}
