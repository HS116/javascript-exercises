const reverseString = function(string) {
    chars = string.split('');
    let reversedChars = [];
    for (let i = chars.length - 1; i >= 0; i--){
        reversedChars.push(chars[i]);
    }

    return reversedChars.join('');
};

// Do not edit below this line
module.exports = reverseString;
