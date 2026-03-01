var trimTrailingVowels = function (s) {
    let vowels = "aeiou";

    let i = s.length - 1;

    while (i >= 0 && vowels.includes(s[i])) {
        i--;
    }

    return s.slice(0, i + 1);
};