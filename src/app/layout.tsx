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

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var base = ${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")};
    var saved = localStorage.getItem('theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var root = document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(theme);
    // If images are in /images, include it here too:
    var img = theme === 'dark'
      ? base + '/images/synthwave-cityscape-dark.jpg'
      : base + '/images/synthwave-cityscape.jpg';
    root.style.setProperty('--background-image', "url('" + img + "')");
  } catch(_) {}
})();`

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
