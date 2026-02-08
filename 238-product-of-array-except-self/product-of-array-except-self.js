/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
 let n = nums.length;
    let ans = [];
    let left_Product = [];
    let right_Product = [];
    left_Product[0] = 1;


    for (let i = 1; i < n; i++)
    {
        left_Product[i] = left_Product[i - 1] * nums[i - 1];
    }
    right_Product[n - 1] = 1;

    for (let i = n - 2; i >= 0; i--)
    {
        right_Product[i] = right_Product[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++)
    {
        ans[i] = left_Product[i] * right_Product[i];
    }
    return ans;
};