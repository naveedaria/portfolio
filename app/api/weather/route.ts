import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 300 // Cache for 5 minutes

export async function GET() {
  try {
    const apiKey = process.env.WEATHER_API_KEY
    
    if (!apiKey) {
      console.error('Weather API key is missing')
      return NextResponse.json(
        { error: 'Weather API configuration error' }, 
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Toronto&aqi=no`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Weather API error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      })
      return NextResponse.json(
        { error: 'Weather service unavailable' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Weather API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

