'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

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
    image: "/whereto.png?height=400&width=600",
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
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-16">
          <div className="space-y-2 mb-8 sm:mb-0">
            <h1 className="text-3xl font-medium text-center sm:text-left">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-300">
                Naveed Aria
              </Link>
              <span className="text-gray-400 ml-2">—</span>
              <span className="text-gray-600 ml-2 text-xl">Projects</span>
            </h1>
            <SocialLinks />
          </div>
          <nav className="flex items-center gap-4 sm:gap-8">
            <NavLink href="/projects">projects</NavLink>
            {/* <NavLink href="/writing">writing</NavLink> */}
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <article key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-baseline justify-between">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Link 
                          href={project.demoLink}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          <span className="font-medium">Live Demo</span>
                        </Link>
                        <Link 
                          href={project.githubLink}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          <span className="font-medium">View Code</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

