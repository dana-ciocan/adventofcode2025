# Approach

## Part 1

Was easy, did that without thinking much about it

## Part 2

This one is trickier and I'm finding myself panicking, so let's have a think about it before we go in hamfisted.

Let's take the range 95-115

95
96
97
98
99 <-- match
100
101
102
103
104
105
106
107
108
109
110
111 <-- match
112
113
114
115

We can split each of these numbers into their constituent parts and compare them to each other - if they're all the same, we've got a match!

However, this doesn't account for other examples like 998-1012, where we should get out 999 and 1010.

My idea is to split each number up first into single digits i.e. [1, 0, 1, 0] and check if they're all the same. Then, we'll do another loop, but this time we'll split the numbers into two digits, i.e. [10, 10] and if they're all the same, we have a match.

We should be able to be quite clever about whether a number can be split in the first place i.e. if a number is 5 digits long and we want to split it into chunks of 2, we can't because there will be a single digit left over.
