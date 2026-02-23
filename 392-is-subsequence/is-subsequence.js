/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (t.length < s.length)
        return false

          if(s==t)
        return true;
        
    let j = 0
    for (let i = 0; i < t.length; i++) {
        if (s[j] == t[i]) {
            j++
        }
        if(j==s.length)
        return true
      
    }
    return false
};