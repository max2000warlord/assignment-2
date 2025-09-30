import { headers } from 'next/headers'
import TabsGenerator from '@/components/TabsGenerator'
import type { Metadata } from 'next'

export default async function Page() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
  return (
    <main className="min-h-screen py-8">
      <TabsGenerator />
    </main>
  )
}
