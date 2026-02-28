# Weather App Project

React weather application built with Vite, using the OpenWeatherMap API.

## Project context

- Framework: React 18 + Vite
- API: OpenWeatherMap (free tier, requires API key)
- Features: city search, current conditions, 5-day forecast, F/C toggle, dynamic gradient background
- Built in Chapter 10 of *Claude Code for Beginners*

## Setup

1. Get a free API key at openweathermap.org (takes up to 2 hours to activate)
2. Copy `.env.example` to `.env`
3. Replace `your_api_key_here` with your real API key

## How to run

```bash
npm install      # first time only
npm run dev      # start development server at http://localhost:5173
```

## Project structure

- `src/App.jsx` — main component with search, weather display, and forecast
- `src/App.css` — styling including dynamic gradient backgrounds
- `.env` — your API key (not committed — keep it private)
- `.env.example` — template showing required environment variables

## When working with Claude Code

- To add features: describe what you want (e.g., "add a search history")
- To change the design: describe the style change
- Never share your `.env` file or API key publicly
