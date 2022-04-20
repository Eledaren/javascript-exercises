const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    } else if (isNaN(firstNum) || isNaN(secondNum)) {
        return 'ERROR';
    } else if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR';
    } else if (firstNum > secondNum) {
        let temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    } 
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
