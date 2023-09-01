const repeatString = function(message, count) {
    if (count < 0){
        return 'ERROR';
    }
    let repeated = '';
    for (let i = 0; i < count; i++){
        repeated = repeated + message;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
