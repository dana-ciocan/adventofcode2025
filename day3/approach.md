# Approach

## Part 1

Need to find the highest number in a string of numbers.

My plan is to:

1. Find the highest digit in the first n -1 numbers (because we need to find two numbers in order so if the last digit is the highest, it doesn't matter)
2. Say the position of the highest number is x, then we'll search between x and n for the next highest number

Seems easy enough?
