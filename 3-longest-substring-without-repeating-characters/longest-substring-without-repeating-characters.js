/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0
    let maxLen = 0
    let subStr = new Set()
    while (end < s.length)
        if (!subStr.has(s[end])) {
            subStr.add(s[end])
            maxLen = Math.max(maxLen, subStr.size)
            end++

        } else {
            subStr.delete(s[start])
            start++

        }
    return maxLen

};