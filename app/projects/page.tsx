'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { WeatherInfo } from '@/components/weather-info'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  demoLink: string
  githubLink: string
  year: string
}

const projects: Project[] = [
  {
    title: "AiRM Robotic Arm",
    description: "A reinforcement learning-powered robotic control system that achieved 90% success rate in object manipulation tasks by implementing DDPG algorithm with PyTorch and integrating real-time computer vision capabilities.",
    technologies: ["Python", "PyTorch", "MujoCo", "OpenAI Gymnasium", "OpenCV"],
    image: "/AiRM.png?height=400&width=600",
    demoLink: "https://www.youtube.com/watch?v=WiJtKO3sOtU",
    githubLink: "https://github.com/techstartucalgary/roboticarm",
    year: "2023"
  },
  {
    title: "WhereTo?",
    description: "A scalable location-based web application that helps groups find optimal meetup locations by leveraging MongoDB's geospatial queries and Google Places API integration.",
    technologies: ["JavaScript", "Express", "Node.js", "REST APIs", "Google Places API", ""],
    image: "/WhereTo.png",
    demoLink: "",
    githubLink: "https://github.com/techstartucalgary/decision-backend",
    year: "2022"
  },
  {
    title: "Procidensa / Gaitonomics",
    description: "An award-winning healthcare solution that analyzes gait patterns using KNN prediction models to predict fall risk, validated through real-time demonstrations with over 20 participants and winning first place in the Innovation4Health Hackathon.",
    technologies: ["Python", "Node.js", "NextJS", "React", "TensorFlow", "Keras", "MongoDB"],
    image: "/gait.jpg",
    demoLink: "https://www.canva.com/design/DAFAPDSQuaA/SWkz9_ZF8LleJCMrH7nb2A/view?utm_content=DAFAPDSQuaA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3882e4fac6",
    githubLink: "",
    year: "2022"
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-24">
        <header className="flex flex-col sm:flex-row justify-between items-start mb-16">
          <div className="flex flex-col items-start gap-4 mb-8 sm:mb-0">
            <Link 
              href="/" 
              className="text-2xl font-serif tracking-tight hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors"
            >
              Naveed Aria
            </Link>
            <SocialLinks />
            <WeatherInfo />
          </div>
          <nav className="flex items-center gap-8">
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/resume">resume</NavLink>
            {/* <NavLink href="/bookcase">bookcase</NavLink> */}
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-bold mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        {project.demoLink && (
                          <Link 
                            href={project.demoLink}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View demo of ${project.title}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        )}
                        {project.githubLink && (
                          <Link 
                            href={project.githubLink}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code of ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.filter(Boolean).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium rounded-full
                          bg-emerald-50 dark:bg-emerald-900/20 
                          text-emerald-600 dark:text-emerald-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

