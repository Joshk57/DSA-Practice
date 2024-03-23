var maxProfit = function(prices) {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
};


prices = [7,1,5,3,6,4]
// prices = [7,6,4,3,1]
// console.log(maxProfit(prices))

// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  const lastSeen = {};
  let longest = [0,1];
  let startIdx = 0;
 
  for(let i=0;i<s.length;i++){
    const char = s[i];
    if( char in lastSeen)  startIdx = Math.max(startIdx, lastSeen[char] + 1);
    if(longest[1]-longest[0] < i+ 1 - startIdx) longest = [startIdx,i+1];
     lastSeen[char] = i;
  }
   return s.slice(longest[0],longest[1]).length;
};

s = "abcabcbb"
// s = "bbbbb"
// s = "pwwkew"

console.log(lengthOfLongestSubstring(s))

// Longest Repeating Character Replacement

var characterReplacement = function(s, k) {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};

s = "ABAB", k = 2
// s = "AABABBA", k = 1
console.log(characterReplacement)