'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

export default function Resume() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-16">
          <div className="space-y-2 mb-4 sm:mb-0">
            <h1 className="text-3xl font-medium text-center sm:text-left">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-300">
                Naveed Aria
              </Link>
              <span className="text-gray-400 ml-2">—</span>
              <span className="text-gray-600 ml-2 text-xl">resume</span>
            </h1>
            <SocialLinks />
          </div>
          <nav className="flex items-center gap-4 sm:gap-8">
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="max-w-3xl">
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Education</h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-medium">University of Calgary</h3>
                    <p className="text-lg text-gray-600 italic">B.Sc in Computer Science</p>
                  </div>
                  <span className="text-gray-600 mt-1 sm:mt-0">2018 – 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-medium">University of Calgary</h3>
                    <p className="text-lg text-gray-600 italic">BComm. in Finance</p>
                  </div>
                  <span className="text-gray-600 mt-1 sm:mt-0">2018 – 2023</span>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Professional Experience</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                      <h3 className="text-xl font-medium">IBM Canada</h3>
                      <p className="text-lg text-gray-600 italic">Software Developer</p>
                    </div>
                    <span className="text-gray-600 mt-1 sm:mt-0">May 2023 – Present</span>
                  </div>
                  <p className="text-md text-gray-600">
                    As a Software Developer at IBM, I focus on modernizing enterprise applications and improving developer workflows. My main areas of work include:
                  </p>
                  <ul className="list-disc list-inside text-md text-gray-600 ml-4">
                    <li>Building real-time voice applications</li>
                    <li>Developing AI-powered documentation tools</li>
                    <li>Leading the transformation of legacy systems to modern microservices architecture</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                      <h3 className="text-xl font-medium">Userful Inc.</h3>
                      <p className="text-lg text-gray-600 italic">Software Developer Intern</p>
                    </div>
                    <span className="text-gray-600 mt-1 sm:mt-0">May 2022 – Sep 2022</span>
                  </div>
                  <p className="text-md text-gray-600">
                    During my internship at Userful, I worked primarily on:
                  </p>
                  <ul className="list-disc list-inside text-md text-gray-600 ml-4">
                    <li>Web application internationalization</li>
                    <li>System architecture improvements</li>
                    <li>Enhancing authentication systems</li>
                    <li>Optimizing backend performance</li>
                    <li>Contributing to core infrastructure development</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

