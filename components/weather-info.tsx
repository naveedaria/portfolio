'use client'

import { useEffect, useState } from 'react'
import { WeatherAnimation } from './weather-animation'
import { getWeather } from '@/lib/weather'
import { motion } from 'framer-motion'

interface WeatherData {
  current: {
    temp_c: number
    condition: {
      text: string
    }
  }
}

export function WeatherInfo() {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather()
      setWeather(data)
    }
    fetchWeather()
    
    // Refresh weather every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (!weather?.current?.condition) return null

  return (
    <motion.div 
      className="flex items-center gap-3 text-sm bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <WeatherAnimation condition={weather.current.condition.text} />
      <span className="text-gray-600 dark:text-gray-300">
        {weather.current.temp_c}°C in Toronto
      </span>
    </motion.div>
  )
}

