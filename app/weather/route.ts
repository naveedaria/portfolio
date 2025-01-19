import { NextResponse } from 'next/server'

export async function GET() {
  try {
    if (!process.env.WEATHER_API_KEY) {
      return NextResponse.json({ error: 'Weather API key is not configured' }, { status: 500 })
    }

    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Toronto&aqi=no`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 300 // Revalidate every 5 minutes
        }
      }
    )

    if (!res.ok) {
      throw new Error(`Weather API responded with status: ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching weather:', error)
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 })
  }
}

