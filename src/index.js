module.exports = function reverse (n) {
    let isNegative = false;
    if (n < 0) {
        isNegative = true;
        n = -n;
    }
    let reverse = 0;
    while (n > 0) {
        reverse = reverse * 10 + n % 10;
        n = parseInt(n / 10);
    }
    if (reverse >= Math.pow(2, 31) - 1 || reverse <= Math.pow(-2, 31)) {
        return 0;
    }
    return isNegative ? reverse : reverse;
};
