'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="flex gap-8 items-center">
      <Link 
        href="https://github.com/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5" />
      </Link>
      <Link 
        href="https://linkedin.com/in/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-5 h-5" />
      </Link>
      <Link 
        href="mailto:naveedaria4@gmail.com"
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
        aria-label="Email Me"
      >
        <Mail className="w-5 h-5" />
      </Link>
    </div>
  )
}

