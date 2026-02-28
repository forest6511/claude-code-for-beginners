# Chapter 9: Build a Quiz App — React + Vite

A 10-question multiple-choice quiz app built with React and Vite. This is the project you build in Chapter 9 of *Claude Code for Beginners*.

## What It Does

- Shows one question at a time with four multiple-choice options
- Highlights the correct answer in green after you answer
- Shows the wrong answer in red when you pick incorrectly
- Displays the correct answer text if you get it wrong
- Tracks your progress ("Question 3 of 10") with a progress bar
- Shows your final score with a message based on how you did
- "Try Again" button to restart the quiz

## Setup and Running

### Requirements

- Node.js version 18 or higher

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

### Install dependencies

macOS:
```bash
cd ch09-quiz-app
npm install
```

Windows (PowerShell):
```powershell
cd ch09-quiz-app
npm install
```

### Run the development server

macOS:
```bash
npm run dev
```

Windows:
```powershell
npm run dev
```

Then open your browser and go to `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Project Structure

```
ch09-quiz-app/
├── index.html          # HTML entry point
├── package.json        # Project config and dependencies
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main quiz component (questions + logic)
    └── App.css         # Styling
```

## How It Was Built

In Chapter 9, you build this app step by step using Claude Code:

1. Scaffold the project with `npm create vite@latest`
2. Ask Claude Code to build the quiz component
3. Add questions, scoring, and results
4. Style everything with CSS

The entire quiz lives in `src/App.jsx` — one file, easy to read and modify.
