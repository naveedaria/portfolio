'use client'

import { Check, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function SocialLinks() {
  const [copied, setCopied] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('naveedaria4@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex gap-8 items-center">
      <Link 
        href="https://github.com/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300 relative group"
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          GitHub
        </span>
      </Link>
      <Link 
        href="https://linkedin.com/in/naveedaria" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300 relative group"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-5 h-5" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          LinkedIn
        </span>
      </Link>
      <button
        onClick={copyEmail}
        className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300 relative group"
        aria-label="Copy email address"
      >
        {copied ? (
          <Check className="w-5 h-5 text-emerald-500" />
        ) : (
          <Mail className="w-5 h-5" />
        )}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? 'Copied!' : 'Copy email'}
        </span>
      </button>
    </div>
  )
}

