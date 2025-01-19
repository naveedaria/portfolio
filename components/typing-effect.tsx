'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypingEffectProps {
  words: string[]
  className?: string
}

export function TypingEffect({ words, className = "" }: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const deletingSpeed = 50
    const wordChangeDelay = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText !== words[currentWordIndex]) {
          setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1))
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), wordChangeDelay)
        }
      } else {
        // Deleting
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        } else {
          setCurrentText(currentText.slice(0, currentText.length - 1))
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <AnimatePresence>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1 inline-block w-0.5 h-5 bg-current"
        />
      </AnimatePresence>
    </div>
  )
}

