const sumAll = function(lesser, greater) {
    if (!Number.isInteger(lesser) || !Number.isInteger(greater)){
        return 'ERROR';
    } else if (lesser < 0 || greater < 0){
        return 'ERROR';
    }

    if (greater < lesser){
        let hold = greater;
        greater = lesser;
        lesser = hold;
    }
    let sum = 0;
    for(let i = lesser; i <= greater; i++){
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
