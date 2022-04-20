const repeatString = function(string, num) {
    for (let i = 0; i < num; i++) {
        return string.repeat(num);
    }

    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
