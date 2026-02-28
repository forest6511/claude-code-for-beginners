# Chapter 8: Supercharging Claude Code — Skills and CLAUDE.md

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

To use these Skills in your own Claude Code sessions:

1. Create a `.claude/skills/` directory inside your project (or in your home directory for global skills)
2. Copy the skill folder (e.g., `new-project/`) into `.claude/skills/`
3. Start a Claude Code session — the skill will be available as a slash command

For example:
```bash
mkdir -p ~/my-project/.claude/skills
cp -r skills/new-project ~/my-project/.claude/skills/
cd ~/my-project
claude
# Now type /new-project to use the skill
```

## MCP (Model Context Protocol)

Chapter 8 also covers MCP — a standard way to connect Claude Code to external tools and services (databases, APIs, web browsers, and more). MCP configuration is done in Claude Code's settings, not in project files, so there are no MCP config files in this directory.

See Chapter 8 in the book for the full MCP walkthrough.
