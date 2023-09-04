const fibonacci = function(index) {
    if (index < 0)
    {
        return "OOPS";
    }

    let sequence = [0, 1, 1];
    for(let i = 0; i <= index; i++) {
        if (!sequence[i]){
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
    }
    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
