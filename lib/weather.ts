export async function getWeather() {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Toronto&aqi=no`
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching weather:', error)
    return null
  }
}

