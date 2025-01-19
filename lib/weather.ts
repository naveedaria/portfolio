export async function getWeather() {
  try {
    const response = await fetch('/api/weather', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Weather fetch error:', {
        status: response.status,
        statusText: response.statusText,
        data: errorData
      })
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Weather fetch error:', error)
    return null
  }
}

