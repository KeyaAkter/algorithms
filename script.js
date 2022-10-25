// Data Structures and Algorithms

// What is algorithms? -- An algorithm is a set of well-defined instructions to solve a particular problem

// why are they important? -- Boosts performance & increase efficiency of a website.

// Algorithmic thinking, or the ability to define clear steps to solve a problem, is crucial in many different fields. Even if we’re not conscious of it, we use algorithms and algorithmic thinking all the time. Algorithmic thinking allows students to break down problems and conceptualize solutions in terms of discrete steps. Being able to understand and implement an algorithm requires students to practice structured thinking and reasoning abilities.

// Time complexity -- time needed to execute a program

// Time complexity is defined as the amount of time taken by an algorithm to run, as a function of the length of the input. It measures the time taken to execute each statement of code in an algorithm. It is not going to examine the total execution time of an algorithm.

// Space complexity -- memory space needed to execute a program

// Space complexity is the total amount of memory space used by an algorithm/program including the space of input values for execution. So to find space-complexity, it is enough to calculate the space occupied by the variables used in an algorithm/program.

// an algorithm is efficient or not is depend on time complexity and space complexity

// One way to measure the efficiency of an algorithm is to count how many operations it needs in order to find the answer across different input sizes.

// how to find time complexity and Space complexity? -- Asymptotic notation -- to express a programs efficiency and performance

/* Asymptotic notations are mathematical tools to represent the time complexity of algorithms for asymptotic analysis
 There are three different notations:
  1. big O notation (O) -- define the cost of an algorithm

  -- The Big-O notation describes the worst-case running time of a program. We compute the Big-O of an algorithm by counting how many iterations an algorithm will take in the worst-case scenario with an input of N. We typically consult the Big-O because we must always plan for the worst case. For example, O(log n) describes the Big-O of a binary search algorithm.

  2. omega(Ω) notation

  --Big-Ω (Omega) describes the best running time of a program. We compute the big-Ω by counting how many iterations an algorithm will take in the best-case scenario based on an input of N. For example, a Bubble Sort algorithm has a running time of Ω(N) because in the best case scenario the list is already sorted, and the bubble sort will terminate after the first iteration.

  3. theta(θ) notation 
  
  The common algorithmic runtimes from fastest to slowest are:
              1. constant: Θ(1)
              2. logarithmic: Θ(log N)
              3. linear: Θ(N)
              4. polynomial: Θ(N^2)
              5. exponential: Θ(2^N)
              6. factorial: Θ(N!)
  */

/*
Linear Time Complexity: O(n) -- When time complexity grows in direct proportion to the size of the input, you are facing Linear Time Complexity, or O(n). Algorithms with this time complexity will process the input (n) in “n” number of operations. This means that as the input grows, the algorithm takes proportionally longer to complete.

Logarithmic Time Complexity: O(log n) -- Algorithms with this complexity make computation amazingly fast. An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size. This means that instead of increasing the time it takes to perform each subsequent step, the time is decreased at a magnitude that is inversely proportional to the input “n”.

This time complexity is generally associated with algorithms that divide problems in half every time, which is a concept known as “Divide and Conquer”. Divide and Conquer algorithms solve problems using the following steps:

1. They divide the given problem into sub-problems of the same type.
2. They recursively solve these sub-problems.
3. They appropriately combine the sub-answers to answer the given problem.

Quadratic Time Complexity: O(n²) -- In this type of algorithms, the time it takes to run grows directly proportional to the square of the size of the input (like linear, but squared).
In most scenarios and particularly for large data sets, algorithms with quadratic time complexities take a lot of time to execute and should be avoided.
Nested For Loops run on quadratic time, because you’re running a linear operation within another linear operation, or n*n which equals n².

Exponential Time Complexity: O(2^n) -- In exponential time algorithms, the growth rate doubles with each addition to the input (n), often iterating through all subsets of the input elements. Any time an input unit increases by 1, it causes you to double the number of operations performed.
Algorithms with this time complexity are usually used in situations where you don’t know that much about the best solution, and you have to try every possible combination or permutation on the data
*/

// Find the time complexity using big-O notation?

"use script";

function sum(arr) {
  sum = 0; // executes 1 time
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // executes 6 times (n = array.length)
  }
  return sum; // executes 1 time
}

console.log(sum([1, 23, 4, 7, 4, 9, 34])); // O(n) - linear time complexity & linear space complexity -- depending on i/p size output increases

//time complexity = n + 1 + 1 = n + 2 = n -- depending on array element

function sum2(n1, n2) {
  return n1 + n2; // executes 1 times
}
console.log(sum2(10, 20)); // O(1) - constant time complexity -- program runs 1 time, doesn't depend on i/p size -- best

let n = 10;
for (let i = 1; i <= n; i++) {
  // n
  for (let j = 1; j <= n; j++) {
    // n
    console.log(i, j); // O(n^2) - quadratic time complexity
  }
}

// 3 nested for loop : O(n^3) - cubic time complexity

// Objects --> insert():O(1), remove():O(1), access: O(1), search: O(n), Object.keys() or Object.values() or Object.entries() : O(n)

// O(1) -- insert an element to the object, remove an element from the object, access an element from the object

// O(n) -- search an element -- increases with obj property, .keys(), .values(), .entries()

// Arrays --> push() or pop(): O(1), shift() or unshift() : O(n), arr[3] : O(1), search or slice() or splice or forEach() or map(): O(n)

// Fibonacci Series

// fibonacci(2) -- [0,1]
// fibonacci(3) -- [0,1,1]
// fibonacci(3) -- [0,1,1,2]
// fibonacci(4) -- [0,1,1,2,3]
// fibonacci(5) -- [0,1,1,2,3,5]
// fibonacci(6) -- [0,1,1,2,3,5,8]
// fibonacci(7) -- [0,1,1,2,3,5,8,13]

// n = (n-1) + (n-1-1) = (n-1) + (n-2);

function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
}

console.log(fibonacci()); // O(n)

// 1 loop --> O(n)
// 2 loop --> O(n^2)
// 3 loop --> O(n^3)
// constant --> O(1)
// input size divided by half --> O(logn)

// factorial
// n! --> n * (n-1)!
// 8! = 8 * (8-1)! = 8 * 7!

// 0! --> 1
// 5! --> 5 * 4 * 3 * 2 * 1 = 5 * 4!
// 6! -->6 * 5 * 4 * 3 * 2 * 1 = 6 * 5!
// 7! -->7 * 6 * 5 * 4 * 3 * 2 * 1 = 7 * 6!

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(8));

// 64-bits number system (64------> 1, 64 ------> 0)

// Prime Number
// 3 ---> (1 * 3), (3 * 1)
// 4 ---> (1 * 4),(4 * 1),(2 * 2)

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(43));
console.log(isPrime(125));
console.log(isPrime(133));
console.log(isPrime(1));
console.log(isPrime(12)); // O(n)

// Power of 2
// 1 --> 2^0
// 2 --> 2^1
// 8 --> 2^3
// 9 --> false
// 16 --> 2^4

function powerOfTwo(num) {
  if (num < 1) return false;
  while (num > 1) {
    if (num % 2 != 0) return false;
    num = num / 2;
  }
  return true;
} // logarithomic time complexity : O(logn) -- in every iteration input size became half

console.log("Power of Two");
console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(8));
console.log(powerOfTwo(9));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));

// Unit Step

// x = n --> time samples from 0 to n
// y =[1, 1, 1, 1, 1, ......, n] --> amplitude

function unitStep(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    y.push(1);
  }
  return y;
}

console.log(unitStep(10)); // O(n)

// Unit Ramp signal

// x = n
// y = [1,2,3,....n]

function unitRamp(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    y.push(i);
  }
  return y;
}
console.log(unitRamp(10)); //O(n)

// Unit Impulse
// x = 0
// y = 1, otherwise 0
// y = 1, 0, 0, 0

function unitImpulse(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    if (i == 0) y.push(1);
    else y.push(0);
  }
  return y;
}

console.log(unitRamp(10)); // O(n)

// Trapping Rain Water Problem

function trappingRainWater(heights) {
  let water = 0;
  let leftMax = -1; // not included in array
  let rightMax = -1;

  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  if (heights.length < 3) return water;

  while (leftIndex <= rightIndex) {
    leftMax = heights[leftIndex] > leftMax ? heights[leftIndex] : leftMax;

    rightMax = heights[rightMax] > rightMax ? heights[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      // water = waterlevel - elevator height
      water += rightMax - heights[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - heights[leftIndex];
      leftIndex++;
    }
  }
  return water;
}

console.log(trappingRainWater([5, 3, 4, 7, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 8, 7, 5, 6, 4, 2, 1, 5, 7]));

// recursion -- The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).
// Recursive function calls itself until condition met

// fibonacci series
// [0, 1, 1, 2, 3, 5, 8, 13, .....,n]
// 6th element = 8;
// 7th el = 13;

// [0, 1] reserved

// 0 --> 0
// 1 --> 1

// element < 2 means (for 0 & 1); return element

// n = (n - 1) + (n - 2) ---> parts -- n - 1 , n - 2

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 1
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13

// time complexity = O(2^n) , input = 1 ,the function called itself 2 times. if n = 100, the function called itself 2^n = 2 ^ 100 times

// recursive factorial

// 6! = 6 * 5 * 4 * 3 * 2 = 6 * 5!
// n! = n * (n-1)! --> parts -- n & (n-1)!
// base case: n === 0, o/p =1

function recursiveFactorial(n) {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(8));
console.log(recursiveFactorial(6));
// O(n) -- linear, for input size = 1, the function called itself once, so function calling itself ability will increase with increasing input size,

// search algorithms -- Search algorithms are used to retrieve some information stored in a data structure.

/* Linear Search -- Linear Search is a very common searching algorithm; It is implemented under the hood in the JavaScript built-in methods indexOf(), includes(), find(), and findIndex().

Linear Search is also very straightforward and easy to implement: simply loop over each element in an array and stop if that element equals our target value, then return that element’s index.

Linear Search is the best we can do when searching unsorted arrays, such as [4, 2, 3].

For sorted arrays, Binary Search is a more efficient option.
*/
// arr = [23, 34, 67, 77, 90], 67? --> 2
// arr = [23, 34, 67, 77, 90], 55? --> -1
// arr = [23, 34, 67, 77, 90], 90? --> 4

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([23, 34, 67, 77, 90], 67));
console.log(linearSearch([23, 34, 67, 77, 90], 55));
console.log(linearSearch([23, 34, 67, 77, 90], 90)); // O(n) -- lineartime complexity

/* Binary Search -- Binary Search can be used to search for values in SORTED arrays only – such as [1, 2, 3, 6, 9]. It is more performant that Linear Search for anything other than small arrays (< 10 elements). It is much more performant than Linear Search when the sorted array is large.

Binary Search is a “divide and conquer” type algorithm; it divides the array roughly in half every time it checks whether a value is the one we’re looking for.

Here’s how Binary Search works:

1. Start in the middle and check if the target is greater or less than that value.
2. If the target is greater, we will next look at the second half of the array (ignore the right)
3. If the target is smaller, we look at the first half of the array (ignore the left).
4. We pick the middle of that half and check if it’s greater or less than our target.
Repeat this process until we find our target.

*/

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2); // lowest integer, Math.fill() -- highest, Math.round() -- nearest

    if (target === arr[midIndex]) return midIndex;

    if (target > arr[midIndex]) leftIndex = midIndex + 1;
    else rightIndex = midIndex - 1;
  }
  return -1;
}

console.log(binarySearch([23, 34, 67, 77, 90], 67));
console.log(binarySearch([23, 34, 67, 77, 90], 55));
console.log(binarySearch([23, 34, 67, 77, 90], 90)); // O(logn)
