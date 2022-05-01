const fibonacci = function(n) {

    n = parseInt(n);

    if (n <= 0){
        return "OOPS";
    } else if (n == 1){
        return 1;
    } else if (n == 2){
        return 1;
    } else {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++){
            let temp = a;
            a = b;
            b = b + temp;
        }

        return b;
    }

};

// Do not edit below this line
module.exports = fibonacci;
