## Task 1
- Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

### Approach
- first I used the map method on the array to loop through and return a new array with the same number of elements of zeros (0)
- then I used a nested for loop of which the outer for loop is iterating through the given array and the inner for loop is iterating through the next element and checking if that element is smaller than the previous element
- if the condition is true then the element at the index position in the new array is incremented by 1
- when the loop has finished executing, the new array is returned