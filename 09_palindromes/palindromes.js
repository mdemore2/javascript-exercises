const palindromes = function (inputString) {
    inputString = inputString.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    charArray = Array.from(inputString);
    reversed = [...charArray].reverse()
    return (charArray.toString() === reversed.toString());
};

// Do not edit below this line
module.exports = palindromes;
