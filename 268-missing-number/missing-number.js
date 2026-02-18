/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

let s=0
let n=nums.length
let actualSum=n*(n+1)/2
// console.log(actualSum)
for(let num of nums)
{
    s=s+num
}
return actualSum-s
// console.log(s)
};