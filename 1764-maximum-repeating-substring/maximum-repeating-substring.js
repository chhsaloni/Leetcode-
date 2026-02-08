/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let str = word;
    let counter = 0;
    if (!sequence.includes(word))
        return 0
        
    while (sequence.includes(str)) {
        counter++;
        str += word;
    }
    return counter;
};