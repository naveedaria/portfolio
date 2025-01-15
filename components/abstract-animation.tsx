'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function AbstractAnimation() {
  return (
    <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.15] pointer-events-none">
      <motion.svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-emerald-900"
      >
        <motion.path
          d="M150,150 C225,75 375,75 450,150 S525,300 450,450 S300,525 150,450 S75,300 150,150"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            pathOffset: [0, 0.5, 1]
          }}
          transition={{ 
            duration: 10,
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.circle
          cx="300"
          cy="300"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.4, 0.8],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />
      </motion.svg>
    </div>
  )
}

