/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    

    let obj={}

let maxlen=0
let oddIn=false
for(let i of s)
{
    obj[i]=(obj[i]||0)+1
}
console.log(obj)

for(let o in obj)
{
    if(obj[o]%2==0)
    {
        maxlen+=obj[o]
    }
    else
    {
    let p= Math.floor(obj[o]/2)
    maxlen+=p*2
    oddIn=true
    }
}
if(oddIn==true)
maxlen+=1
return maxlen
};