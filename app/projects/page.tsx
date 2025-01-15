'use client'

import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

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
    title: "Distributed Systems Framework",
    description: "A high-performance distributed computing framework designed for large-scale data processing. Implements custom consensus algorithms and fault tolerance mechanisms.",
    technologies: ["Rust", "gRPC", "Protocol Buffers", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
    demoLink: "https://demo.example.com/distributed-systems",
    githubLink: "https://github.com/example/distributed-systems",
    year: "2023"
  },
  {
    title: "Neural Audio Synthesis",
    description: "Real-time audio synthesis using deep learning models. Generates novel sounds based on learned representations of musical instruments.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Web Audio API"],
    image: "/placeholder.svg?height=400&width=600",
    demoLink: "https://demo.example.com/neural-audio",
    githubLink: "https://github.com/example/neural-audio",
    year: "2022"
  },
  {
    title: "Compiler Implementation",
    description: "A compiler for a custom programming language, featuring advanced type inference and optimization passes.",
    technologies: ["OCaml", "LLVM", "Assembly", "C++"],
    image: "/placeholder.svg?height=400&width=600",
    demoLink: "https://demo.example.com/compiler",
    githubLink: "https://github.com/example/compiler",
    year: "2022"
  }
]

export default function Projects() {
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
              <span className="text-gray-600 ml-2 text-xl">Projects</span>
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
          <main className="max-w-4xl mx-auto">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <article key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Link 
                          href={project.demoLink}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                          <span className="font-medium">Live Demo</span>
                        </Link>
                        <Link 
                          href={project.githubLink}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
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

