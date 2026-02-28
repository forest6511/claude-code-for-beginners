# Chapter 10: Build a Weather App — React + Vite + OpenWeatherMap

A real weather app that fetches live data from the OpenWeatherMap API. This is the capstone project from Chapter 10 of *Claude Code for Beginners*.

## What It Does

- Search for any city in the world by name
- Current weather display: temperature, condition, humidity, wind speed, feels-like
- Temperature unit toggle (Fahrenheit / Celsius)
- 5-day forecast with daily high and low temperatures
- Dynamic gradient background that changes based on weather conditions:
  - Clear/sunny: warm orange-yellow gradient
  - Cloudy/overcast: gray gradient
  - Rain/storms: dark charcoal gradient
  - Snow: light cool gradient
- Loading state while fetching data
- Clear error message if a city is not found
- Weather icons using emoji (no icon library needed)

## Setup

### Step 1 — Get a free API key

1. Go to [openweathermap.org](https://openweathermap.org) and create a free account
2. After signing in, go to "API Keys" in your account settings
3. Copy your API key (it may take up to 2 hours to activate after account creation)

### Step 2 — Add your API key

Create a file called `.env` in the `ch10-weather-app/` directory:

```
VITE_WEATHER_API_KEY=paste_your_key_here
```

The `.env` file is listed in `.gitignore` so your key will not be committed to version control. Never share your API key publicly.

### Step 3 — Install dependencies

**Requirements**: Node.js version 18 or higher.

**Install Node.js** (if not already installed):

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version
3. Run the installer and follow the steps (accept all defaults)
4. Close and reopen your terminal, then verify:

```bash
node --version
npm --version
```

Both commands should print a version number.

Then install the project dependencies:

macOS:
```bash
cd ch10-weather-app
npm install
```

Windows (PowerShell):
```powershell
cd ch10-weather-app
npm install
```

### Step 4 — Run the development server

macOS:
```bash
npm run dev
```

Windows:
```powershell
npm run dev
```

Open your browser and go to `http://localhost:5173`. Type a city name and press Enter.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder. You can deploy them to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
ch10-weather-app/
├── index.html          # HTML entry point
├── package.json        # Project config and dependencies
├── vite.config.js      # Vite configuration
├── .env.example        # Template — copy to .env and add your key
├── .env                # Your real API key — create this yourself (not in git)
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main component (search, current weather, forecast)
    └── App.css         # Styling with dynamic gradient support
```

## API Reference

This app uses two OpenWeatherMap endpoints:

- **Current weather:** `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}`
- **5-day forecast:** `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={key}`

Both endpoints are on the free tier. No credit card required.

## Troubleshooting

**"City not found" error for a valid city**
- Check the spelling carefully
- Try adding the country code: `London,GB` or `Paris,FR`

**API key not working**
- New API keys can take up to 2 hours to activate after account creation
- Make sure your `.env` file is named exactly `.env` (not `.env.txt`)
- Make sure the variable name is exactly `VITE_WEATHER_API_KEY`
- Restart `npm run dev` after creating or editing `.env`

See Appendix D in the book for more troubleshooting tips.
