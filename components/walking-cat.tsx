'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'

export function WalkingCat() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const updateCatPosition = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect()
        controls.start({ x: width - 100 }) // Subtracting cat width to keep it fully visible
      }
    }

    const unsubscribe = scrollYProgress.on('change', updateCatPosition)
    updateCatPosition() // Initial position

    return () => unsubscribe()
  }, [controls, scrollYProgress])

  return (
    <div ref={containerRef} className="relative h-20 mt-12 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0"
        animate={controls}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8ZM5 9V15H19V9H5Z" fill="currentColor" />
          <path d="M7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V11Z" fill="currentColor" />
          <path d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V11Z" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  )
}

