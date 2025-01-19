'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { WeatherInfo } from '@/components/weather-info'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-950 px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row justify-between items-start mb-16">
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
          <main className="max-w-4xl">
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-6">About Me</h2>
              <div className="prose prose-emerald dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Software Engineer with a unique blend of technical and business acumen, holding degrees in both Computer Science and Finance. My passion lies in creating innovative solutions that bridge the gap between complex technology and practical business applications. With experience in both startup and enterprise environments, I bring a comprehensive understanding of how technology can drive business value.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently based in Toronto, I focus on building scalable applications and exploring the intersection of AI and software engineering. Outside of coding, I'm an avid reader and technology enthusiast.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Professional Experience</h2>
              <div className="space-y-12">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                      <h3 className="text-xl font-medium">IBM Canada</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 italic">Software Developer</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">May 2023 – Present</span>
                  </div>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside text-md text-gray-600 dark:text-gray-400 ml-4 space-y-2">
                      <li>Architected and implemented real-time voice processing applications using WebSockets and realtime voice models</li>
                      <li>Led the development of AI Agent powered documentation, and user story point tools</li>
                      <li>Collaborated in the refactoring of a monolith backend service into microservices</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">Python</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">React</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">PostgresSQL</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">WebSockets</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">Docker</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                      <h3 className="text-xl font-medium">Userful Inc.</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 italic">Software Developer Intern</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">May 2022 – Sep 2022</span>
                  </div>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside text-md text-gray-600 dark:text-gray-400 ml-4 space-y-2">
                      <li>Supported i18n implementation across React applications by configuring TypeScript language files and testing translations</li>
                      <li>Improved API performance by 40% through GraphQL optimizations and caching implementations</li>
                      <li>Developed secure authentication integrations for enterprise clients, supporting single sign-on across multiple providers</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">React</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">GoLang</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">Unix/Linux</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">GraphQL</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs">TypeScript</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Education</h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div>
                    <h3 className="text-xl font-medium">University of Calgary</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 italic">B.Sc in Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1"></p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2018 – 2023</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div>
                    <h3 className="text-xl font-medium">University of Calgary</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 italic">BComm. in Finance</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1"></p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2018 – 2023</span>
                </motion.div>
              </div>
            </section>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

