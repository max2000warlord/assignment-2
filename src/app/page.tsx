// src/app/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to LTU Moodle App',
}

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to LTU Moodle App
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/courses" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📚 My Courses</h2>
          <p className="text-gray-600 dark:text-gray-400">View your enrolled courses</p>
        </Link>

        <Link href="/assignments" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📝 Assignments</h2>
          <p className="text-gray-600 dark:text-gray-400">Check due dates and submit work</p>
        </Link>

        <Link href="/grades" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📊 Grades</h2>
          <p className="text-gray-600 dark:text-gray-400">View your academic progress</p>
        </Link>

        <Link href="/calendar" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📅 Calendar</h2>
          <p className="text-gray-600 dark:text-gray-400">Important dates and deadlines</p>
        </Link>

        <Link href="/resources" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📁 Resources</h2>
          <p className="text-gray-600 dark:text-gray-400">Course materials and downloads</p>
        </Link>

        <Link href="/tools/tabs-generator" className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Dev Tools</h2>
          <p className="text-gray-600 dark:text-gray-400">HTML generators and utilities</p>
        </Link>
      </div>
    </main>
  )
}
