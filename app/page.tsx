'use client'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { ThemeProvider } from './components/theme-provider'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  )
}

