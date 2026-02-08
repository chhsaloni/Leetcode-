/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = ""
    let flag = 0

    for (let j = 0; j < strs[0].length; j++) {
        let char = strs[0][j]
        // console.log(char)

        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] != char) {
                flag = 1
                break;

            }
        }
        if (flag == 1) break;
        prefix += char
    }
    return prefix
    // console.log(prefix)
};