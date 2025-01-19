'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import { WeatherInfo } from '@/components/weather-info'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { motion } from 'framer-motion'
import { TypingEffect } from '@/components/typing-effect'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 lg:px-24">
        <header className="flex flex-col sm:flex-row justify-between items-start mb-16 sm:mb-32">
          <div className="flex flex-col items-start gap-4 mb-8 sm:mb-0">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-3xl font-serif tracking-tight hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors"
              >
                Naveed Aria
              </Link>
              <WeatherInfo />
            </div>
            <SocialLinks />
          </div>
          <nav className="flex items-center gap-8">
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/resume">resume</NavLink>
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                  Building Digital Experiences in Toronto
                </h1>
                <TypingEffect 
                  words={[
                    "Full-Stack Developer.",
                    "Problem Solver.",
                    "AI Enthusiast."
                  ]}
                  className="text-xl text-emerald-600 dark:text-emerald-400 font-medium mb-4"
                />
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Based in the heart of Toronto's tech hub, I create intuitive and 
                  scalable solutions that bridge the gap between complex technical 
                  challenges and real-world user needs.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pNgQcR1rM00gWUJ2Vr0v32LFnukl95.png"
                    alt="Autumn scene in Toronto with CN Tower in the background"
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4 italic">
                  Catch me on a walk through Trinity Bellwoods Park!
                </p>
              </div>
            </motion.div>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

