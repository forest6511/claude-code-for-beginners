# Chapter 5: Build Something Useful — CSV Expense Analyzer

This directory contains the expense analyzer built in Chapter 5 of *Claude Code for Beginners*. It reads a CSV file of expenses and prints a summary report.

## Files

- `analyze.py` — The analyzer script (built iteratively in the chapter)
- `expenses.csv` — Sample expense data used throughout Chapter 5

## What the Script Does

The analyzer reads any CSV file with `date,description,category,amount` columns and prints:

1. **Expense Summary** — Total transactions, total spent, average transaction amount
2. **Spending by Category** — Amount per category with a visual bar chart and transaction count
3. **Monthly Breakdown** — Totals grouped by month
4. **Largest Expense** — The single biggest transaction

## Running the Script

Make sure Python 3 is installed on your computer (Chapter 2 covers this).

**Basic usage** (uses `expenses.csv` in the same directory):

macOS:
```bash
python3 analyze.py
```

Windows:
```powershell
python analyze.py
```

**Analyze a different file:**

macOS:
```bash
python3 analyze.py my-expenses.csv
```

Windows:
```powershell
python analyze.py my-expenses.csv
```

## Expected Output

Running the script on the included `expenses.csv` produces:

```
=== Expense Summary ===

Total transactions: 20
Total spent: $755.16
Average transaction: $37.76

=== Spending by Category ===
Utilities:     $238.99  ############################## (4 transactions)
Food:          $185.20  ####################### (6 transactions)
Shopping:      $140.49  ################## (3 transactions)
Transport:     $137.50  ################# (4 transactions)
Entertainment:  $52.98  ####### (3 transactions)

=== Monthly Breakdown ===
January 2024:    $755.16  (20 transactions)

=== Largest Expense ===
Electric Bill - Utilities - $89.00
```

## No External Packages Required

The script uses only Python's built-in standard library (`csv`, `sys`, `collections`, `datetime`). No `pip install` needed.
