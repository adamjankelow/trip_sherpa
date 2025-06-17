import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()
  const { destination, days, vibe } = req.body
  const plan = `Your ${days}-day ${vibe} trip to ${destination}`
  res.status(200).json({ plan })
}
