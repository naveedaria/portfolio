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
      <div className="flex flex-col items-center">
        <Link 
          href="https://github.com/naveedaria" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </Link>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">GitHub</span>
      </div>
      
      <div className="flex flex-col items-center">
        <Link 
          href="https://linkedin.com/in/naveedaria" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">LinkedIn</span>
      </div>
      
      <div className="flex flex-col items-center">
        <button
          onClick={copyEmail}
          className="text-gray-400 hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors duration-300"
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : (
            <Mail className="w-5 h-5" />
          )}
        </button>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {copied ? 'Copied!' : 'Email'}
        </span>
      </div>
    </div>
  )
}

