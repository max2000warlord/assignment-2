// src/app/tools/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Development Tools',
  description: 'HTML and CSS generators to speed up your development',
}

export default function ToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Development Tools</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        HTML and CSS generators to speed up your development
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/tools/tabs-generator"
          className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition"
        >
          <div className="text-3xl mb-2">🔖</div>
          <h2 className="text-xl font-semibold mb-2">Tabs Generator</h2>
          <p className="text-gray-600 dark:text-gray-400">Generate HTML tabs with custom content</p>
        </Link>

        {/* Placeholder for future tools */}
        <div className="block p-6 border dark:border-gray-300 rounded-lg opacity-50">
          <div className="text-3xl mb-2">📋</div>
          <h2 className="text-xl font-semibold mb-2">Form Builder</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>

        <div className="block p-6 border dark:border-gray-300 rounded-lg opacity-50">
          <div className="text-3xl mb-2">🎴</div>
          <h2 className="text-xl font-semibold mb-2">Card Generator</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>
      </div>
    </main>
  )
}
