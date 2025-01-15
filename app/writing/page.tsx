'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'

export default function Writing() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex items-baseline justify-between mb-16">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-300">
                Naveed Aria
              </Link>
              <span className="text-gray-400 ml-2">—</span>
              <span className="text-gray-600 ml-2 text-xl">Writing</span>
            </h1>
            <SocialLinks />
          </div>
          <nav className="flex gap-8">
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/writing">writing</NavLink>
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
          </nav>
        </header>

        <PageTransition>
          <main className="max-w-3xl">
            <div className="text-xl leading-relaxed text-gray-800">
              <p>feast or famine</p>
              <p>winning is everything</p>
              <p>meow</p>
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

