// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
import { GlobalLayout } from '@/app/global-layout'
import { BackgroundFader } from '@/components/background-fader'

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
    var img = theme === 'dark' ? base + '/synthwave-cityscape-dark.jpg' : base + '/synthwave-cityscape.jpg';
    root.style.setProperty('--background-image', "url('" + img + "')");
  } catch(_) {}
})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Prevent initial flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark">
            {/* Global crossfade background */}
            <BackgroundFader />
            <GlobalLayout>{children}</GlobalLayout>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
