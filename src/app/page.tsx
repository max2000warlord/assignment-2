import { headers } from 'next/headers'
import type { Metadata } from 'next'

export default async function Page() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
}
