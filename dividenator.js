const dividenator = function(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return 'FizzBuzz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else {
        return num
    }
}

module.exports = dividenator;