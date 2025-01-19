import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { ParticleBackground } from '@/components/particle-background'
import { ReadingProgress } from '@/components/reading-progress'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Naveed Aria',
  description: 'Software Engineer & Creative Technologist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ParticleBackground />
          <ReadingProgress />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

