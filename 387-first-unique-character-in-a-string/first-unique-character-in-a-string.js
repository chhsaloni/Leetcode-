/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let obj = {}
    for (let o of s) {
        obj[o] = (obj[o] || 0) + 1
    }
    console.log(obj)
    for (let o in obj) {
        if (obj[o] == 1) {
           return s.indexOf(o)
          
            break;
        }
    }
    return -1
};