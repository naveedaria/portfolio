'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'

export default function Resume() {
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
            <span className="text-gray-600 ml-2 text-xl">Resume</span>
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
          <section className="mb-16">
            <h2 className="text-3xl font-medium mb-8">Education</h2>
            <div className="space-y-8">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-xl font-medium">University of Calgary</h3>
                  <p className="text-lg text-gray-600 italic">B.Sc in Computer Science</p>
                </div>
                <span className="text-gray-600">2018 — 2023</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-xl font-medium">University of Calgary</h3>
                  <p className="text-lg text-gray-600 italic">BComm. in Finance</p>
                </div>
                <span className="text-gray-600">2018 — 2023</span>
              </div>
              <p className="text-lg"></p>
            </div>
          </section>

          {/* <section className="mb-16">
            <h2 className="text-3xl font-medium mb-8">Teaching</h2>
            <ul className="space-y-4 text-lg">
              <li>
                TF for CS 153 (Compilers), Fall 2021 — <span className="italic">Certificate of Distinction in Teaching</span>
              </li>
              <li>
                TA for Summer Geometry Institute (SGI), Summer 2021
              </li>
              <li>
                TF for CS 161 (Operating Systems), Spring 2021 — <span className="italic">Certificate of Distinction in Teaching</span>
              </li>
              <li>
                TF for CS 182 (Artificial Intelligence), Fall 2020
              </li>
              <li>
                TF for CS 124 (Data Structures and Algorithms), Spring 2020 — <span className="italic">Commendation for Extraordinary Teaching</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-8">Graduate-level technical coursework</h2>
            <ul className="space-y-4 text-lg">
              <li>Advanced Computational Complexity (CS 221)</li>
              <li>Random Processes and Algorithms (CS 223)</li>
              <li>Computational Learning Theory (CS 228)</li>
              <li>Advanced Algorithms (CS 224)</li>
            </ul>
          </section> */}
        </main>
      </PageTransition>
      </div>
    </div>
  )
}

