function hasTargetSum(array, target) {
  // Create a Set to store numbers we've already checked
  const seenNumbers = new Set();

  for (const number of array) {
    // Calculate the complement needed to reach the target
    const complement = target - number;

    // If we've seen the complement before, we found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add current number to our Set
    seenNumbers.add(number);
  }

  // If we finish the loop without finding a pair
  return false;
}

/* 
  Big O Time Complexity: O(n)
  - We iterate through the array once (n operations)
  - Set operations (has/add) are O(1) on average
  - Overall time complexity is linear
*/

/* 
  Pseudocode:
  1. Initialize an empty Set to track seen numbers
  2. For each number in the input array:
     a. Calculate complement (target - current number)
     b. Check if complement exists in Set
     c. If yes, return true immediately
     d. If no, add current number to Set
  3. If loop completes without finding a pair, return false
*/

/*
  Explanation:
  This solution efficiently checks for pairs that sum to the target by using a Set to remember
  numbers we've already processed. For each number, we calculate what other number we'd need
  (its complement) to reach the target sum. If we've seen that complement before, we return true.
  This approach only requires a single pass through the array, making it optimal with O(n) time
  complexity. The Set provides O(1) average time complexity for lookups and insertions.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // 3 + 7

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // 19 + 6

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // -7 + 10

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10)); // empty array

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5)); // single element
}

module.exports = hasTargetSum;