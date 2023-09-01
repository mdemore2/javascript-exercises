const removeFromArray = function(originalArray, ...elementsToRemove) {
    for (element of elementsToRemove){
        if (originalArray.includes(element)){
            let indexToRemove = originalArray.indexOf(element);
            originalArray.splice(indexToRemove, 1);
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
