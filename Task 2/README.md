## Task 2
- Given a string as an argument, write a function that returns the first recurring character in the string or null if there is no recurring character.

### Approach
- I used a for loop to iterate over all the characters in the string
- inside the loop, there is an if statement to check if the character at a given index is equal to the character at the next index
- if the statement is true, then it should return the character at the given index
- If there is no recurring character at the end of the loop, then it should return null
