const reverseString = function(message) {
    let charArray = message.split('');
    charArray = charArray.reverse();
    return charArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
