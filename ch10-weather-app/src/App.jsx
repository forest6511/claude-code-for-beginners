import { useState } from 'react'

// Weather condition icons using emoji (no icon library needed)
function getWeatherIcon(condition) {
  const c = condition.toLowerCase()
  if (c.includes('clear') || c.includes('sunny')) return '☀️'
  if (c.includes('partly cloudy') || c.includes('few clouds')) return '⛅'
  if (c.includes('cloud') || c.includes('overcast')) return '☁️'
  if (c.includes('rain') || c.includes('drizzle')) return '🌧️'
  if (c.includes('thunder') || c.includes('storm')) return '⛈️'
  if (c.includes('snow') || c.includes('blizzard')) return '❄️'
  if (c.includes('fog') || c.includes('mist') || c.includes('haze')) return '🌫️'
  if (c.includes('wind')) return '💨'
  return '🌤️'
}

// Background gradient based on weather condition
function getBackground(condition) {
  if (!condition) return 'var(--bg-default)'
  const c = condition.toLowerCase()
  if (c.includes('clear') || c.includes('sunny')) return 'var(--bg-clear)'
  if (c.includes('rain') || c.includes('drizzle') || c.includes('thunder') || c.includes('storm'))
    return 'var(--bg-rain)'
  if (c.includes('snow') || c.includes('blizzard')) return 'var(--bg-snow)'
  return 'var(--bg-cloudy)'
}

// Convert Kelvin to Fahrenheit
function toF(kelvin) {
  return Math.round((kelvin - 273.15) * 9 / 5 + 32)
}

// Convert Kelvin to Celsius
function toC(kelvin) {
  return Math.round(kelvin - 273.15)
}

// Format a Unix timestamp to a short weekday name (e.g., "Mon")
function formatDay(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' })
}

// Format a Unix timestamp to a date string (e.g., "Jan 15")
function formatDate(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

// Group forecast entries by day and compute daily high/low
function buildForecast(forecastList) {
  const days = {}
  forecastList.forEach((entry) => {
    const day = new Date(entry.dt * 1000).toDateString()
    if (!days[day]) {
      days[day] = { dt: entry.dt, high: entry.main.temp_max, low: entry.main.temp_min, condition: entry.weather[0].description }
    } else {
      if (entry.main.temp_max > days[day].high) days[day].high = entry.main.temp_max
      if (entry.main.temp_min < days[day].low) days[day].low = entry.main.temp_min
    }
  })
  // Return the next 5 distinct days
  return Object.values(days).slice(0, 5)
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [unit, setUnit] = useState('F') // 'F' or 'C'

  function displayTemp(kelvin) {
    return unit === 'F' ? `${toF(kelvin)}°F` : `${toC(kelvin)}°C`
  }

  async function fetchWeather(cityName) {
    if (!cityName.trim()) return
    setLoading(true)
    setError('')
    setWeather(null)
    setForecast([])

    try {
      // Fetch current weather
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`
      )
      if (!currentRes.ok) {
        if (currentRes.status === 404) throw new Error(`City "${cityName}" not found. Check the spelling and try again.`)
        throw new Error('Unable to fetch weather data. Please try again.')
      }
      const currentData = await currentRes.json()

      // Fetch 5-day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`
      )
      const forecastData = forecastRes.ok ? await forecastRes.json() : null

      setWeather(currentData)
      if (forecastData) {
        setForecast(buildForecast(forecastData.list))
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleSearch(e) {
    e.preventDefault()
    fetchWeather(city)
  }

  const condition = weather?.weather?.[0]?.description || ''
  const background = getBackground(condition)

  return (
    <div className="app" style={{ '--current-bg': background }}>
      {/* Search bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City name"
        />
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? '...' : 'Search'}
        </button>
      </form>

      {/* Loading state */}
      {loading && (
        <div className="status-card">
          <p className="loading-text">Fetching weather data...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="status-card error-card">
          <p className="error-icon">⚠️</p>
          <p className="error-text">{error}</p>
        </div>
      )}

      {/* Weather display */}
      {weather && !loading && (
        <>
          {/* Current weather card */}
          <div className="weather-card">
            <div className="location">
              <h1 className="city-name">{weather.name}</h1>
              <span className="country">{weather.sys.country}</span>
            </div>

            <div className="main-weather">
              <span className="weather-icon-large" role="img" aria-label={condition}>
                {getWeatherIcon(condition)}
              </span>
              <div className="temp-block">
                <span className="temperature">{displayTemp(weather.main.temp)}</span>
                <button
                  className="unit-toggle"
                  onClick={() => setUnit((u) => (u === 'F' ? 'C' : 'F'))}
                  title="Toggle temperature unit"
                >
                  Switch to {unit === 'F' ? '°C' : '°F'}
                </button>
              </div>
            </div>

            <p className="condition-text">
              {condition.charAt(0).toUpperCase() + condition.slice(1)}
            </p>

            <div className="details-row">
              <div className="detail">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail">
                <span className="detail-label">Wind</span>
                <span className="detail-value">{Math.round(weather.wind.speed)} mph</span>
              </div>
              <div className="detail">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{displayTemp(weather.main.feels_like)}</span>
              </div>
            </div>
          </div>

          {/* 5-day forecast */}
          {forecast.length > 0 && (
            <div className="forecast-card">
              <h2 className="forecast-title">5-Day Forecast</h2>
              <div className="forecast-row">
                {forecast.map((day, i) => (
                  <div key={i} className="forecast-day">
                    <p className="forecast-weekday">{formatDay(day.dt)}</p>
                    <p className="forecast-date">{formatDate(day.dt)}</p>
                    <span className="forecast-icon" role="img" aria-label={day.condition}>
                      {getWeatherIcon(day.condition)}
                    </span>
                    <p className="forecast-high">{displayTemp(day.high)}</p>
                    <p className="forecast-low">{displayTemp(day.low)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Welcome state */}
      {!weather && !loading && !error && (
        <div className="welcome-card">
          <p className="welcome-icon">🌤️</p>
          <p className="welcome-text">Search for a city to see the current weather and 5-day forecast.</p>
        </div>
      )}
    </div>
  )
}
