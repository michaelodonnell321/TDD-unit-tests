const leapYear = function(num) {
    if (num % 400 === 0) {
        return true
    } else if(num % 100 === 0) {
        return false
    } else if (num % 4 === 0) {
        return true
    }
}

module.exports = leapYear;