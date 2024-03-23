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
// console.log(characterReplacement)

// Permutation in string

var checkInclusion = function(s1, s2) {
  const len1 = s1.length, len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
      count[s1.charCodeAt(i)-97]++;
      count[s2.charCodeAt(i)-97]--;
  }
  if (!count.some(e => e !== 0)) return true;

  for (let i = len1; i < len2; i++) {
      count[s2.charCodeAt(i)-97]--;
      count[s2.charCodeAt(i-len1)-97]++;
      if (!count.some(e => e !== 0)) return true;
  }
  return false;
};

s1 = "ab", s2 = "eidbaooo"
// s1 = "ab", s2 = "eidboaoo"
console.log(characterReplacement(s1, s2))