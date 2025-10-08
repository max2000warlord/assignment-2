// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
import { GlobalLayout } from '@/app/global-layout'

export const metadata: Metadata = {
  title: "Synthwave UI",
  description: "Retro-futuristic synthwave interface",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark">
            {/* Ensure all app content is above the crossfade overlay */}
            <div className="relative z-10">
              <GlobalLayout>{children}</GlobalLayout>
            </div>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
