/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let maxGlobal = -1000000;
    let max = 0
    for (let num of nums) {
       max+=num

        if (max < num) {
            max = num
        }
        if (maxGlobal < max) {
            maxGlobal = max
        }
    }
    return maxGlobal
}

