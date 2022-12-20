/** Problem on LeetCode 
 https://leetcode.com/problems/trapping-rain-water/ **/

//Optimal
const trapOptimal = function (heights) {
  let totalWatertrapped = 0;

  let left = 0,
    right = heights.length - 1,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWatertrapped += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWatertrapped += maxRight - heights[right];
      }
      right--;
    }
  }

  return totalWatertrapped;
};

//BruteForce
const trap = function (heights) {
  let totalWatertrapped = 0;

  for (let i = 0; i < heights.length; i++) {
    var maxLeft = 0,
      maxRight = 0,
      leftP = i,
      rightP = i;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    totalWatertrapped =
      totalWatertrapped + (Math.min(maxLeft, maxRight) - heights[i]);
  }

  return totalWatertrapped;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trapOptimal([4, 2, 0, 3, 2, 5]));
