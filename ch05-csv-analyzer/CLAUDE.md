# CSV Analyzer Project

Python script that reads a CSV file and prints a summary with charts.

## Project context

- `expenses.csv` — sample expense data (20 rows, 4 columns: date, description, category, amount)
- `analyze.py` — the analysis script with 4 features: summary, category breakdown with bar chart, monthly breakdown, largest expense
- Built in Chapter 5 of *Claude Code for Beginners*

## How to run

```bash
python3 analyze.py              # analyzes expenses.csv
python3 analyze.py mydata.csv   # analyzes any CSV file
```

On Windows, use `python` instead of `python3`.

## CSV format

The script expects columns named: `date`, `description`, `category`, `amount`

## When working with Claude Code

- To analyze different data: tell Claude Code what columns your CSV has
- To add features: describe what summary you want (e.g., "add a top 5 expenses section")
- To adapt for your own data: paste your column names and Claude Code will update the script
