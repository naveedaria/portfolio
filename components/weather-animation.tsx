'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudDrizzle } from 'lucide-react'

interface WeatherAnimationProps {
  condition: string
}

export function WeatherAnimation({ condition }: WeatherAnimationProps) {
  const [icon, setIcon] = useState(<Sun className="text-yellow-500" />)

  useEffect(() => {
    const lowercaseCondition = condition.toLowerCase()
    if (lowercaseCondition.includes('rain')) {
      setIcon(<CloudRain className="text-blue-500" />)
    } else if (lowercaseCondition.includes('snow')) {
      setIcon(<CloudSnow className="text-blue-300" />)
    } else if (lowercaseCondition.includes('thunder')) {
      setIcon(<CloudLightning className="text-yellow-400" />)
    } else if (lowercaseCondition.includes('drizzle')) {
      setIcon(<CloudDrizzle className="text-blue-400" />)
    } else if (lowercaseCondition.includes('cloud') || lowercaseCondition.includes('overcast')) {
      setIcon(<Cloud className="text-gray-400" />)
    } else {
      setIcon(<Sun className="text-yellow-500" />)
    }
  }, [condition])

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ 
        scale: [0.8, 1, 0.8],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {icon}
    </motion.div>
  )
}

