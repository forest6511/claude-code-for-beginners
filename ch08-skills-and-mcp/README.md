# Chapter 8: Supercharging Claude Code — CLAUDE.md, Skills, Sub-agents, and MCP

This directory contains reference files for Chapter 8 of *Claude Code for Beginners*, which covers three powerful ways to customize Claude Code: CLAUDE.md project memory, Skills (custom commands), and MCP (Model Context Protocol).

## Files

```
ch08-skills-and-mcp/
├── example-CLAUDE.md          # Sample CLAUDE.md for a personal finance tracker
└── skills/
    ├── new-project/
    │   └── SKILL.md           # Skill that creates a new web project scaffold
    └── summarize/
        └── SKILL.md           # Skill that summarizes the current project
```

## CLAUDE.md — Project Memory

`example-CLAUDE.md` shows how to write a CLAUDE.md file that tells Claude Code about your project. In a real project, you would rename this file to `CLAUDE.md` and place it in your project root.

Claude Code reads CLAUDE.md automatically at the start of every session. Use it to capture:

- **Style preferences** — colors, fonts, layout rules
- **Coding standards** — naming conventions, error handling patterns
- **Project context** — what the project does, where key files live

The more context you give Claude Code in CLAUDE.md, the less you have to repeat yourself in every conversation.

## Skills — Custom Commands

The `skills/` directory contains two example Skills that extend Claude Code with custom slash commands.

### `/new-project`

**File:** `skills/new-project/SKILL.md`

Creates a complete starter web project (HTML, CSS, README, CLAUDE.md) in `~/projects/`. Triggered by typing `/new-project` in a Claude Code session.

### `/summarize`

**File:** `skills/summarize/SKILL.md`

Scans the current project directory and outputs a summary: file list, total lines of code, languages detected, and a one-sentence description of what the project does. Triggered by typing `/summarize`.

## Setting Up Skills

Skills can live in two places:

| Location | Path | Scope |
|----------|------|-------|
| Personal | `~/.claude/skills/` | Available in all your projects |
| Project  | `.claude/skills/` inside your project | This project only |

The book uses personal skills (available everywhere). To install a skill from this directory:

**macOS / Linux:**
```bash
# Personal skill (matches the book's Chapter 8 instructions)
mkdir -p ~/.claude/skills/new-project
cp ch08-skills-and-mcp/skills/new-project/SKILL.md ~/.claude/skills/new-project/
claude
# Now type /new-project in any project
```

**Windows (PowerShell):**
```powershell
mkdir -Force "$HOME\.claude\skills\new-project"
Copy-Item ch08-skills-and-mcp\skills\new-project\SKILL.md "$HOME\.claude\skills\new-project\"
claude
```

## MCP (Model Context Protocol)

Chapter 8 also covers MCP — a standard way to connect Claude Code to external tools and services (databases, APIs, web browsers, and more). MCP configuration is done in Claude Code's settings, not in project files, so there are no MCP config files in this directory.

See Chapter 8 in the book for the full MCP walkthrough.
