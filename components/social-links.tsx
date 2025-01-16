'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <Link 
        href="https://github.com/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github className="w-6 h-6" />
      </Link>
      <Link 
        href="https://linkedin.com/in/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link 
        href="mailto:naveedaria4@gmail.com"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300"
        aria-label="Email Me"
      >
        <Mail className="w-6 h-6" />
      </Link>
    </div>
  )
}

