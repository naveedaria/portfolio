'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import { AbstractAnimation } from '@/components/abstract-animation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-16">
          <div className="space-y-2 mb-8 sm:mb-0 text-center sm:text-left">
            <h1 className="text-3xl font-medium">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                Naveed Aria
              </Link>
            </h1>
            <SocialLinks />
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-8">
            <NavLink href="/projects">projects</NavLink>
            {/* <NavLink href="/writing">writing</NavLink> */}
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="max-w-3xl relative z-10">
            <div className="space-y-16">
              <motion.h2 
                className="text-4xl sm:text-5xl font-medium leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Software engineer with a passion for art and creative expression.
              </motion.h2>
              <motion.div 
                className="space-y-8 text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p>
                  I blend technical expertise with artistic sensibility, creating systems 
                  that are both functionally elegant and aesthetically meaningful.
                </p>
                <p>
                Currently exploring the intersection of AI and developer tooling, while building real-time systems that scale.
                Currently working at IBM, where I focus on modernizing legacy systems and creating real-time applications that serve thousands of users.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    View my work
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </main>
          <AbstractAnimation />
        </PageTransition>
      </div>
    </div>
  )
}

