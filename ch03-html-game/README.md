# Chapter 3: Your First Magic Moment — HTML Games

This directory contains two browser games built with a single HTML file each. No server, no install, no build step — just open the file in your browser.

These are the kinds of projects you build in Chapter 3 using Claude Code.

## Games

### Snake Game (`snake-game/index.html`)

A classic Snake game with:

- Blue snake on a dark gray background
- Arrow key controls
- Score display at the top
- Collision detection (walls and self)
- Food that appears as a colored dot
- Smooth rendering via HTML Canvas

**How to play:** Use the arrow keys to steer the snake. Eat the colored dots to grow and earn points. Avoid hitting the walls or your own tail.

### Memory Card Game (`memory-card/index.html`)

A card-matching memory game with:

- 4×4 grid of 16 face-down cards (8 matching pairs)
- Emoji symbols as card faces
- Card flip animation (CSS 3D transform)
- 1-second delay before mismatched cards flip back
- Move counter and match tracker
- Win screen with time and move count

**How to play:** Click any two cards to flip them over. If they show the same emoji, they stay face up. If not, they flip back after a short delay. Match all 8 pairs to win!

## Running the Games

No installation required. Just open the HTML file directly in your browser.

**Option 1 — Double-click:** Find the file in Finder (macOS) or File Explorer (Windows) and double-click it. It opens in your default browser.

**Option 2 — Drag and drop:** Drag the `index.html` file into an open browser window.

**Option 3 — From the terminal:**

macOS:
```bash
open ch03-html-game/snake-game/index.html
open ch03-html-game/memory-card/index.html
```

Windows (PowerShell):
```powershell
start ch03-html-game\snake-game\index.html
start ch03-html-game\memory-card\index.html
```

## How These Were Built

In Chapter 3 of *Claude Code for Beginners*, you learn to build projects like these by describing what you want to Claude Code in plain English. Claude Code writes the code; you focus on what you want the game to do.

The complete workflow:
1. Open your terminal and start a Claude Code session
2. Describe the game you want to build
3. Claude Code creates the HTML file
4. Open the file in your browser to play

No prior coding experience required.
