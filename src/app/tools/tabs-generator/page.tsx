// src/app/tools/tabs-generator/page.tsx
import TabsGenerator from '@/components/TabsGenerator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tabs Generator | LTU Moodle App',
  description: 'Generate custom HTML tabs with interactive functionality',
}

export default function TabsGeneratorPage() {
  return (
    <main className="min-h-screen py-8">
      <TabsGenerator />
    </main>
  )
}
