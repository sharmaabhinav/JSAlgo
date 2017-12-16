/*

Longest Subsequence having equal no of zeros and 1
Input : arr[] = { 1, 0, 0, 1, 0, 0, 0, 1 }
Output: 6

Input : arr[] = { 0, 0, 1, 1, 1, 1, 1, 0, 0 }
Output : 8


*/


function longestSubSequence (arr) {
  var zeroCounts = 0
  var oneCounts = 0
  for (var start = 0;start < arr.length;start++) {
    if (arr[start] === 0) {
      zeroCounts += 1
    } else {
      oneCounts += 1
    }
  }
  return Math.min(zeroCounts, oneCounts) * 2
}


console.log(longestSubSequence([ 1, 0, 0, 1, 0, 0, 0, 1]), longestSubSequence([0, 0, 1, 1, 1, 1, 1, 0, 0]))