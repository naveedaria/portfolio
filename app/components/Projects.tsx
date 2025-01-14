'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    image: '/placeholder.svg?height=200&width=350',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/johndoe/ecommerce-platform'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and team collaboration.',
    image: '/placeholder.svg?height=200&width=350',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
    liveLink: 'https://example-taskmanager.com',
    githubLink: 'https://github.com/johndoe/task-management-app'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps and forecasts.',
    image: '/placeholder.svg?height=200&width=350',
    tags: ['React', 'OpenWeatherMap API', 'Chart.js'],
    liveLink: 'https://example-weather.com',
    githubLink: 'https://github.com/johndoe/weather-dashboard'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted dark:bg-muted/10">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

