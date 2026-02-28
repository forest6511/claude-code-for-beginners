# analyze.py — Expense CSV Analyzer
# Reads a CSV file with date, description, category, and amount columns
# and prints a summary report with category totals, bar chart, monthly
# breakdown, and the largest single expense.
#
# Usage:
#   python3 analyze.py               (uses expenses.csv by default)
#   python3 analyze.py myfile.csv    (uses a custom file)

import csv
import sys
from collections import defaultdict
from datetime import datetime


def load_expenses(filename):
    """Load expenses from a CSV file. Returns a list of row dicts."""
    expenses = []
    try:
        with open(filename, newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Convert amount to float for calculations
                row['amount'] = float(row['amount'])
                expenses.append(row)
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        print("Please check the filename and try again.")
        sys.exit(1)
    return expenses


def print_summary(expenses):
    """Print the basic summary: total transactions, total, average."""
    total = sum(e['amount'] for e in expenses)
    count = len(expenses)
    average = total / count if count > 0 else 0

    print("=== Expense Summary ===")
    print()
    print(f"Total transactions: {count}")
    print(f"Total spent: ${total:.2f}")
    print(f"Average transaction: ${average:.2f}")


def print_by_category(expenses):
    """Print spending totals per category with a bar chart."""
    category_totals = defaultdict(float)
    category_counts = defaultdict(int)

    for e in expenses:
        category_totals[e['category']] += e['amount']
        category_counts[e['category']] += 1

    # Sort categories by total amount, highest first
    sorted_categories = sorted(category_totals.items(), key=lambda x: x[1], reverse=True)

    # Scale bar chart so the longest bar = 30 '#' characters
    max_amount = sorted_categories[0][1] if sorted_categories else 1
    bar_max = 30

    # Find the longest category name for alignment
    max_name_len = max(len(cat) for cat, _ in sorted_categories) if sorted_categories else 0
    # Find the widest amount string for alignment (e.g. "$238.99")
    amount_width = max(len(f"${v:.2f}") for v in category_totals.values()) if category_totals else 6

    print()
    print("=== Spending by Category ===")
    for category, total in sorted_categories:
        bar_length = round((total / max_amount) * bar_max)
        bar = '#' * bar_length
        count = category_counts[category]
        padded_name = f"{category}:".ljust(max_name_len + 1)
        amount_str = f"${total:.2f}"
        print(f"{padded_name}  {amount_str:>{amount_width}}  {bar} ({count} transaction{'s' if count != 1 else ''})")


def print_monthly_breakdown(expenses):
    """Print total spending grouped by month."""
    monthly_totals = defaultdict(float)
    monthly_counts = defaultdict(int)

    for e in expenses:
        date = datetime.strptime(e['date'], '%Y-%m-%d')
        month_key = date.strftime('%B %Y')
        monthly_totals[month_key] += e['amount']
        monthly_counts[month_key] += 1

    print()
    print("=== Monthly Breakdown ===")
    for month, total in sorted(monthly_totals.items(),
                                key=lambda x: datetime.strptime(x[0], '%B %Y')):
        count = monthly_counts[month]
        print(f"{month}:    ${total:.2f}  ({count} transaction{'s' if count != 1 else ''})")


def print_largest_expense(expenses):
    """Print the single largest expense."""
    if not expenses:
        return
    largest = max(expenses, key=lambda e: e['amount'])
    print()
    print("=== Largest Expense ===")
    print(f"{largest['description']} - {largest['category']} - ${largest['amount']:.2f}")


def main():
    # Use filename from command line, or fall back to expenses.csv
    filename = sys.argv[1] if len(sys.argv) > 1 else 'expenses.csv'

    expenses = load_expenses(filename)

    print_summary(expenses)
    print_by_category(expenses)
    print_monthly_breakdown(expenses)
    print_largest_expense(expenses)


if __name__ == '__main__':
    main()
