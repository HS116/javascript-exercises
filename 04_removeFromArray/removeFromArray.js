const removeFromArray = function(array, element) {

    let args = Array.from(arguments);

    for (let i = 1; i < args.length; i++){
        index = array.indexOf(arguments[i]);
        if (index != -1){
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
