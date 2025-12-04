# Approach

## Part 1

Need to find the highest number in a string of numbers.

My plan is to:

1. Find the highest digit in the first n -1 numbers (because we need to find two numbers in order so if the last digit is the highest, it doesn't matter)
2. Say the position of the highest number is x, then we'll search between x and n for the next highest number

Seems easy enough?

## Part 2

This one isn't so easy.

Okay, I asked Gemini for a bit of a clue and it said something I thought sounded interesting - think about which number out of 98 you'd have to discard to get the highest number

My plan now is to go from the last array element to the first and discard first the 1s, then the 2s, then the 3s and so on, until n-12 digits have been discarded.

That didn't work, but I think I know what I need to do.

Compare the first two digits of the number, remove the lowest one. Keep doing this until there are the correct number of digits left

That didn't work either. I'm getting very fed up.

Next idea. Make arrays of all the number positions. Go through all the 1s and remove them, then all the 2s and so on.

818181911112111

[1, 3, 5, 7, 8, 9, 10, 12, 13, 14]

Remove 1 at position 1: 88181911112111

Remove 1 at position 3: 8881911112111

Remove 1 at position 5: 888911112111

234234234234278

Does not contain any ones, so the position of the twos is:

[0, 3, 6, 9, 12]

234234234234278

This won't work either.

This is a stupid puzzle and I hate it.

I ended up having to watch a YouTube video for inspiration. I didn't steal their solution, but they helped me see what I was missing.

Part 2 is very much an extension of part 1 - you're just narrowing the range over which you're searching as you're needing 12 digits rather than 2.

So you'll want to search the first N - 11 digits for the first highest number, where N is the length of the input.

Once you've got that number, if K is the index at which you found the highest number, you want to search from K + 1 to N - 10 digits and so on.

It's still quite a mind boggling puzzle even now I have the answer, so no need to feel stupid.
