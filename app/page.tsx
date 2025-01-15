'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import { AbstractAnimation } from '@/components/abstract-animation'
import { WalkingCat } from '@/components/walking-cat'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-16">
          <motion.div 
            className="space-y-2 mb-8 sm:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-medium">
              <Link href="/" className="hover:text-primary/80 transition-colors duration-300">
                Naveed Aria
              </Link>
            </h1>
            <SocialLinks />
          </motion.div>
          <motion.nav 
            className="flex gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/writing">writing</NavLink>
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
          </motion.nav>
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
                className="space-y-8 text-lg sm:text-xl leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p>
                  I blend technical expertise with artistic sensibility, creating systems 
                  that are both functionally elegant and aesthetically meaningful.
                </p>
                <p>
                  Currently exploring the intersection of generative art and distributed 
                  systems, pushing the boundaries of computational creativity.
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
          <WalkingCat />
        </PageTransition>
      </div>
    </div>
  )
}

