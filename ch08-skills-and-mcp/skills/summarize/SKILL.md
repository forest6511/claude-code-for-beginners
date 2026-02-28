---
name: summarize
description: Summarizes the current project — files, languages, and purpose.
---

When the user runs /summarize:

1. List all files in the current directory (excluding node_modules, .git, and other hidden directories).
2. Count total lines of code across all code files.
3. Identify what programming languages are used (based on file extensions).
4. Write a one-sentence description of what the project does, based on the file contents and structure.
5. Output everything in a clean, readable format.
