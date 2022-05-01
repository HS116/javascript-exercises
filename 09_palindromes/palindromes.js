function isLowerAlpha(char){
    return char >= "a" && char <= "z";
}


const palindromes = function (word) {
    word = word.toLowerCase();
    let start = 0;
    let end = word.length - 1;

    while (start <= end){

        while (!isLowerAlpha(word[start])){
            start++;
        }

        while (!isLowerAlpha(word[end])){
            end--;
        }

        if (word[start] != word[end]){
            return false;
        }

        start++;
        end--;
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
